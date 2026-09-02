import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { TYPEWRITER_PAGE_DELAY } from './TypewriterText'

function randChar() {
  let c = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`"
  c = c[Math.floor(Math.random() * c.length)]
  return (Math.random() > 0.5) ? c : c.toUpperCase()
}

export default function CodedText({ text, fromRight = false }) {
  const textRef = useRef(null)
  const tlRef = useRef(null)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    setDisplayedText('')
    let characterIndex = 0
    let typingInterval
    let revealTimeout

    const startTyping = () => {
      revealTimeout = window.setTimeout(() => {
        typingInterval = window.setInterval(() => {
          characterIndex += 1
          setDisplayedText(text.substring(0, characterIndex))
          if (characterIndex >= text.length) {
            window.clearInterval(typingInterval)
          }
        }, 15)
      }, TYPEWRITER_PAGE_DELAY)
    }

    if (window.isSplashComplete === true) {
      startTyping();
    } else {
      const handleSplash = () => startTyping();
      window.addEventListener('splashComplete', handleSplash);
      return () => {
        window.removeEventListener('splashComplete', handleSplash);
        window.clearTimeout(revealTimeout);
        window.clearInterval(typingInterval);
      }
    }

    return () => {
      window.clearTimeout(revealTimeout);
      window.clearInterval(typingInterval);
    }
  }, [text])

  const handlePointerOver = () => {
    if (!textRef.current || displayedText !== text) return

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
          t.innerHTML = text
        }
      }
    )
  }

  return (
    <span onPointerOver={handlePointerOver} style={{ display: 'inline-block' }}>
      <span ref={textRef}>{displayedText}</span>
      {/* Esto reserva el ancho total para evitar saltos y movimientos hacia la izquierda */}
      <span style={{ visibility: 'hidden' }}>{text.substring(displayedText.length)}</span>
    </span>
  )
}