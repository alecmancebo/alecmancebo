import { useEffect, useRef } from 'react'

const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;

  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const fragmentShaderSource = `
  precision mediump float;

  uniform sampler2D u_texture;
  uniform vec2 u_resolution;
  uniform vec2 u_logoSize;
  uniform vec2 u_pointer;
  uniform float u_strength;
  uniform float u_time;
  varying vec2 v_uv;
  uniform vec2 u_logoOrigin;

  void main() {
    vec2 uv = v_uv;
        vec2 logoOrigin = u_logoOrigin;
    vec2 logoSize = u_logoSize / u_resolution;
    vec2 imageUv = (uv - logoOrigin) / logoSize;
    vec2 pointerDistance = uv - u_pointer;
    float distanceToPointer = length(pointerDistance);
    float influence = exp(-distanceToPointer * 24.0) * u_strength;
    float wave = sin(distanceToPointer * 42.0 - u_time * 5.0) * influence;
    vec2 direction = normalize(pointerDistance + vec2(0.0001));
    imageUv.y = 1.0 - imageUv.y;
    imageUv += direction * wave * 0.05;
    imageUv += vec2(
      sin(imageUv.y * 18.0 + u_time * 2.0),
      cos(imageUv.x * 15.0 - u_time * 1.7)
    ) * influence * 0.018;

    if (imageUv.x < 0.0 || imageUv.x > 1.0 || imageUv.y < 0.0 || imageUv.y > 1.0) {
      discard;
    }

    gl_FragColor = texture2D(u_texture, imageUv);
  }
`

const createShader = (gl, type, source) => {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }

  return shader
}

const createProgram = (gl) => {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  if (!vertexShader || !fragmentShader) return null

  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program)
    return null
  }

  return program
}

export default function WebGLLiquidSplash({ onComplete }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const completedRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    const gl = canvas?.getContext('webgl', { alpha: true, antialias: true })
    if (!canvas || !container || !gl) return undefined

    const program = createProgram(gl)
    if (!program) return undefined

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]), gl.STATIC_DRAW)

    const texture = gl.createTexture()
    const image = new Image()
    const rasterCanvas = document.createElement('canvas')
    image.src = '/elementos/alec svg linea.svg'

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const logoSizeLocation = gl.getUniformLocation(program, 'u_logoSize')
    const logoOriginLocation = gl.getUniformLocation(program, 'u_logoOrigin')
    const pointerLocation = gl.getUniformLocation(program, 'u_pointer')
    const strengthLocation = gl.getUniformLocation(program, 'u_strength')
    const timeLocation = gl.getUniformLocation(program, 'u_time')
    const textureLocation = gl.getUniformLocation(program, 'u_texture')
    const pointer = { x: 0.5, y: 0.5 }
    const targetPointer = { x: 0.5, y: 0.5 }
    let imageReady = false
    let disposed = false
    let targetStrength = 0
    let strength = 0
    let frameId
    let startTime = performance.now()

    const getLandingLogoRect = () => {
      const landingLogo = document.querySelector('.browser__background-logo')
      if (landingLogo) {
        const rect = landingLogo.getBoundingClientRect()
        return { left: rect.left, top: rect.top, width: rect.width, height: rect.height }
      }

      const width = Math.min(window.innerWidth * 0.88, 1100)
      const height = width * 1370 / 3647
      return { left: (window.innerWidth - width) / 2, top: window.innerHeight * 0.49 - height / 2, width, height }
    }

    image.onload = () => {
      if (disposed) return

      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      rasterCanvas.width = 3647
      rasterCanvas.height = 1370
      rasterCanvas.getContext('2d').drawImage(image, 0, 0)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, rasterCanvas)
      imageReady = true
    }

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * pixelRatio
      canvas.height = window.innerHeight * pixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const handlePointerMove = (event) => {
      targetPointer.x = event.clientX / window.innerWidth
      targetPointer.y = 1 - event.clientY / window.innerHeight
      targetStrength = 1
    }

    const handlePointerLeave = () => {
      targetStrength = 0
    }

    const render = (now) => {
      pointer.x += (targetPointer.x - pointer.x) * 0.12
      pointer.y += (targetPointer.y - pointer.y) * 0.12
      strength += (targetStrength - strength) * 0.08

      if (imageReady) {
        gl.clearColor(0, 0, 0, 0)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.useProgram(program)
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
        gl.enableVertexAttribArray(positionLocation)
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.uniform1i(textureLocation, 0)
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
        const logoRect = getLandingLogoRect()
        const pixelRatio = canvas.width / window.innerWidth
        gl.uniform2f(logoSizeLocation, logoRect.width * pixelRatio, logoRect.height * pixelRatio)
        gl.uniform2f(logoOriginLocation, logoRect.left * pixelRatio / canvas.width, 1 - ((logoRect.top + logoRect.height) * pixelRatio / canvas.height))
        gl.uniform2f(pointerLocation, pointer.x, pointer.y)
        gl.uniform1f(strengthLocation, strength)
        gl.uniform1f(timeLocation, (now - startTime) / 1000)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
      }

      frameId = window.requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)
    frameId = window.requestAnimationFrame(render)

    return () => {
      disposed = true
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      gl.deleteTexture(texture)
      gl.deleteBuffer(positionBuffer)
      gl.deleteProgram(program)
    }
  }, [])

  const handleComplete = () => {
    if (completedRef.current) return
    completedRef.current = true
    containerRef.current?.classList.add('webgl-liquid-splash--closing')
    window.setTimeout(onComplete, 850)
  }

  return (
    <div ref={containerRef} className="webgl-liquid-splash" onClick={handleComplete}>
      <canvas ref={canvasRef} className="webgl-liquid-splash__canvas" aria-hidden="true" />
      <span className="webgl-liquid-splash__hint">[CLIC ANYWHERE]</span>
    </div>
  )
}
