import { useState, useEffect } from 'react';

export default function RealTimeClock() {
  const [time, setTime] = useState(new Date());
  const [visibleChars, setVisibleChars] = useState(0);

  // 1. Reloj en tiempo real (se actualiza cada segundo)
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  // 2. Animación de escritura
  useEffect(() => {
    let typingInterval;
    let delayTimeout;

    const startTyping = () => {
      setVisibleChars(0); 
      
      delayTimeout = setTimeout(() => {
        typingInterval = setInterval(() => {
          setVisibleChars((prev) => {
            // "MAD HH:MM:SS" tiene exactamente 12 caracteres
            if (prev >= 12) {
              clearInterval(typingInterval);
              return 12; 
            }
            return prev + 1;
          });
        }, 60);
      }, 300); 
    };

    if (window.isSplashComplete === true) {
      startTyping();
    } else {
      window.addEventListener('splashComplete', startTyping);
    }

    return () => {
      window.removeEventListener('splashComplete', startTyping);
      clearTimeout(delayTimeout);
      clearInterval(typingInterval);
    };
  }, []);

  // 3. Formateamos la hora
  const timeString = `MAD ${time.toLocaleTimeString('es-ES', {
    timeZone: 'Europe/Madrid',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })}`;

  return (
    <span style={{ display: 'inline-block' }}>
      <span>{timeString.substring(0, visibleChars)}</span>
      <span style={{ opacity: 0 }}>{timeString.substring(visibleChars)}</span>
    </span>
  );
}