
import { useState, useEffect } from 'react';

export default function TypewriterText({ text, speed = 15, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Evitamos errores si no hay texto
    if (!text) return;

    setDisplayedText('');
    let i = 0;

    // Retraso inicial antes de empezar a escribir
    const startTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(typingInterval);
      }, speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return (
    <span>
      {displayedText}
      {/* Añadimos una clase para el cursor parpadeante (opcional) */}
      {displayedText.length < text.length && <span className="typewriter-cursor">_</span>}
    </span>
  );
}