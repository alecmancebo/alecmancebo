import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const canvasRef = useRef(null);
  
  const points = useRef(Array.from({ length: 20 }, () => ({ x: -100, y: -100 })));
  const mouse = useRef({ x: -100, y: -100 });
  const requestRef = useRef();

  // 1. Nuevas referencias para controlar el grosor dinámico
  const targetWidth = useRef(16); // Tamaño original (más pequeño)
  const currentWidth = useRef(16); // Tamaño actual renderizado

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 2. Detectar cuándo el cursor entra o sale de elementos interactivos
    const handleMouseOver = (e) => {

      if (e.target.closest('a, button')) {
        targetWidth.current = 32; 
      } else {
        targetWidth.current = 16; 
      }
    };
    document.addEventListener("mouseover", handleMouseOver);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 3. Interpolar suavemente el tamaño actual hacia el tamaño objetivo
      currentWidth.current += (targetWidth.current - currentWidth.current) * 0.15;

      let x = mouse.current.x;
      let y = mouse.current.y;

      points.current.forEach((p, index) => {
        p.x = x;
        p.y = y;
        const next = points.current[index + 1] || points.current[0];
        x += (next.x - x) * 0.7; 
        y += (next.y - y) * 0.7;
      });

      for (let i = 0; i < points.current.length - 1; i++) {
        const p1 = points.current[i];
        const p2 = points.current[i + 1];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        // 4. Aplicar el grosor dinámico calculado
        const width = ((points.current.length - i) / points.current.length) * currentWidth.current;
        
        ctx.lineWidth = width;
        ctx.strokeStyle = '#ffffff';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', resize);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* 1. SVG oculto con márgenes ampliados (x, y, width, height) para que no se recorte */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="graphite-texture" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* 2. Contenedor padre: Se encarga exclusivamente del mix-blend-mode y la posición */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference'
      }}>
        {/* 3. Canvas: Se encarga exclusivamente de recibir el dibujo y el filtro de textura */}
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            filter: 'url(#graphite-texture)'
          }}
        />
      </div>
    </>
  );
}