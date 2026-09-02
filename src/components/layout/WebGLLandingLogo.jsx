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
  uniform vec2 u_logoOrigin;
  uniform vec2 u_pointer;
  uniform float u_time;
  uniform float u_strength;
  varying vec2 v_uv;

  void main() {
    vec2 logoSize = u_logoSize / u_resolution;
    vec2 imageUv = (v_uv - u_logoOrigin) / logoSize;
    vec2 delta = v_uv - u_pointer;
    float distanceToPointer = length(delta);
    float influence = exp(-distanceToPointer * 18.0) * u_strength;
    float wave = sin(distanceToPointer * 48.0 - u_time * 5.0) * influence;
    vec2 direction = normalize(delta + vec2(0.0001));

    imageUv.y = 1.0 - imageUv.y;
    imageUv += direction * wave * 0.045;
    imageUv += vec2(
      sin(imageUv.y * 20.0 + u_time * 2.0),
      cos(imageUv.x * 18.0 - u_time * 1.8)
    ) * influence * 0.014;

    if (imageUv.x < 0.0 || imageUv.x > 1.0 || imageUv.y < 0.0 || imageUv.y > 1.0) discard;
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

export default function WebGLLandingLogo() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 980px), (prefers-reduced-motion: reduce)').matches) return undefined

    const canvas = canvasRef.current
    const gl = canvas?.getContext('webgl', { alpha: true, antialias: true })
    if (!canvas || !gl) return undefined

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
    const pointer = { x: 0.5, y: 0.5 }
    const targetPointer = { x: 0.5, y: 0.5 }
    let imageReady = false
    let strength = 0
    let frameId
    let disposed = false

    image.src = '/elementos/alec svg linea.svg'
    image.onload = () => {
      if (disposed) return
      rasterCanvas.width = 3647
      rasterCanvas.height = 1370
      rasterCanvas.getContext('2d').drawImage(image, 0, 0)
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, rasterCanvas)
      imageReady = true
    }

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const logoSizeLocation = gl.getUniformLocation(program, 'u_logoSize')
    const logoOriginLocation = gl.getUniformLocation(program, 'u_logoOrigin')
    const pointerLocation = gl.getUniformLocation(program, 'u_pointer')
    const timeLocation = gl.getUniformLocation(program, 'u_time')
    const strengthLocation = gl.getUniformLocation(program, 'u_strength')
    const textureLocation = gl.getUniformLocation(program, 'u_texture')

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const handlePointerMove = (event) => {
      targetPointer.x = event.clientX / window.innerWidth
      targetPointer.y = 1 - event.clientY / window.innerHeight
      strength = Math.min(1, strength + 0.18)
    }

    const render = (now) => {
      pointer.x += (targetPointer.x - pointer.x) * 0.14
      pointer.y += (targetPointer.y - pointer.y) * 0.14
      strength *= 0.985

      if (imageReady) {
        const logo = document.querySelector('.browser__background-logo')
        const rect = logo?.getBoundingClientRect()
        if (rect) {
          const ratio = canvas.width / window.innerWidth
          gl.useProgram(program)
          gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
          gl.enableVertexAttribArray(positionLocation)
          gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
          gl.activeTexture(gl.TEXTURE0)
          gl.bindTexture(gl.TEXTURE_2D, texture)
          gl.uniform1i(textureLocation, 0)
          gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
          gl.uniform2f(logoSizeLocation, rect.width * ratio, rect.height * ratio)
          gl.uniform2f(logoOriginLocation, rect.left * ratio / canvas.width, 1 - ((rect.top + rect.height) * ratio / canvas.height))
          gl.uniform2f(pointerLocation, pointer.x, pointer.y)
          gl.uniform1f(timeLocation, now / 1000)
          gl.uniform1f(strengthLocation, strength)
          gl.drawArrays(gl.TRIANGLES, 0, 6)
        }
      }
      frameId = window.requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handlePointerMove)
    frameId = window.requestAnimationFrame(render)

    return () => {
      disposed = true
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      gl.deleteTexture(texture)
      gl.deleteBuffer(positionBuffer)
      gl.deleteProgram(program)
    }
  }, [])

  return <canvas ref={canvasRef} className="webgl-landing-logo" aria-hidden="true" />
}
