import { useRef } from 'react'
import gsap from 'gsap'

function randChar() {
  let c = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`"
  c = c[Math.floor(Math.random() * c.length)]
  return (Math.random() > 0.5) ? c : c.toUpperCase()
}

export default function CodedText({ text, fromRight = false }) {
  const textRef = useRef(null)
  const tlRef = useRef(null)

  const handlePointerOver = () => {
    if (!textRef.current) return

    // Mata la animación anterior si se hace hover repetidamente
    if (tlRef.current) tlRef.current.kill()

    const t = textRef.current
    const arr1 = text.split('')
    let step = 0

    tlRef.current = gsap.timeline()
    tlRef.current.fromTo(t, 
      { innerHTML: arr1.map(() => randChar()).join('') },
      {
        duration: arr1.length / 20,
        ease: 'power4.in',
        delay: 0.1,
        
        onUpdate: () => {
          const p = Math.floor(tlRef.current.progress() * arr1.length)
          if (step !== p) {
            step = p
            const currentArr2 = arr1.map(() => randChar())
            
            let pt1 = arr1.join('').substring(0, p)
            let pt2 = currentArr2.join('').substring(0, currentArr2.length - p)
            
            if (fromRight) {
              pt1 = currentArr2.join('').substring(0, currentArr2.length - p)
              pt2 = arr1.join('').substring(arr1.length - p)
            }
            t.innerHTML = pt1 + pt2
          }
        },
        onComplete: () => {
          // Asegura que al terminar vuelva al texto original exacto
          t.innerHTML = text
        }
      }
    )
  }

  return (
    <span ref={textRef} onPointerOver={handlePointerOver} style={{ display: 'inline-block' }}>
      {text}
    </span>
  )
}