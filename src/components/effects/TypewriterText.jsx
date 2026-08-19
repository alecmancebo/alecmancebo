import { useState, useEffect, useRef } from 'react';

export const TYPEWRITER_PAGE_DELAY = 0;

export default function TypewriterText({ text = "", speed = 10, delay = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // 1. Detectar cuándo el elemento entra en pantalla (Scroll)
  useEffect(() => {
    const currentElement = containerRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una vez que es visible y empieza a escribir, desconectamos el observador 
          // para que no se reinicie la animación al subir y bajar el scroll.
          observer.disconnect(); 
        }
      },
      {
        threshold: 0, // Se activa cuando el 10% del texto entra en pantalla
        rootMargin: '0px 0px 50px 0px' // Margen de holgura
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  // 2. Lógica de escritura que ahora espera a que 'isVisible' sea true
  useEffect(() => {
    if (!text || !isVisible) return;

    setCurrentIndex(0);
    let i = 0;

    const startTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          if (next >= text.length) clearInterval(typingInterval);
          return next;
        });
      }, speed);

      return () => clearInterval(typingInterval);
    }, TYPEWRITER_PAGE_DELAY + delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay, isVisible]);

  // 3. Dividimos el texto en dos fragmentos
  const visibleText = text.substring(0, currentIndex);
  const hiddenText = text.substring(currentIndex);

  return (
    <span ref={containerRef} style={{ display: 'inline' }}>
      {/* Texto que ya se ha escrito */}
      <span>{visibleText}</span>
      
      {/* Cursor parpadeante (solo se muestra cuando el elemento es visible y no ha terminado) */}
      {isVisible && currentIndex < text.length && (
        <span className="typewriter-cursor">_</span>
      )}
      
      {/* Texto restante con 'visibility: hidden'. No se ve, pero RESERVA EL ESPACIO EXACTO */}
      <span style={{ visibility: 'hidden' }}>{hiddenText}</span>
    </span>
  );
}