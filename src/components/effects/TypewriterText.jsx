import { useState, useEffect, useRef } from 'react';

export const TYPEWRITER_PAGE_DELAY = 0;

export default function TypewriterText({ text = "", speed = 15, delay = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // 1. Detectamos cuándo entra en pantalla
  useEffect(() => {
    const currentElement = containerRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0, 
        rootMargin: '0px 0px 50px 0px' 
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  // 2. Animación de escritura de alta velocidad
  useEffect(() => {
    if (!text || !isVisible) return;

    let timeoutId;
    let typingInterval;

    const startTyping = () => {
      setCurrentIndex(0);
      
      // LA MAGIA: Si el texto es largo, agrupamos caracteres.
      // Dividir entre 50 asegura que NINGÚN texto, por largo que sea, tarde más de ~0.6 segundos totales.
      const charsPerTick = Math.max(1, Math.ceil(text.length / 100));

      timeoutId = setTimeout(() => {
        typingInterval = setInterval(() => {
          setCurrentIndex((prev) => {
            const next = prev + charsPerTick; // Sumamos varias letras de golpe
            if (next >= text.length) {
              clearInterval(typingInterval);
              return text.length;
            }
            return next;
          });
        }, speed); // 12 milisegundos por salto
      }, TYPEWRITER_PAGE_DELAY + delay);
    };

    if (window.isSplashComplete === true) {
      startTyping();
    } else {
      const handleSplash = () => startTyping();
      window.addEventListener('splashComplete', handleSplash);
      return () => {
        window.removeEventListener('splashComplete', handleSplash);
        clearTimeout(timeoutId);
        clearInterval(typingInterval);
      };
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(typingInterval);
    };
  }, [text, speed, delay, isVisible]);

  const visibleText = text.substring(0, currentIndex);
  const hiddenText = text.substring(currentIndex);

  return (
    <span ref={containerRef} style={{ display: 'inline' }}>
      <span>{visibleText}</span>
      {/* Mantenemos el texto oculto renderizado para que el layout no dé saltos visuales */}
      <span style={{ visibility: 'hidden' }}>{hiddenText}</span>
    </span>
  );
}