import React, { useEffect, useRef } from 'react';

export const TouchSparkles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const sparkles = [];
    // Light pastel colorful palette: soft rose, peach, lavender, mint, baby blue, warm gold, champagne, lilac, pearl
    const pastelColors = [
      '#FFB7C5', // Soft Pastel Rose Pink
      '#FFD4B2', // Lite Pastel Peach
      '#E7C6FF', // Lite Pastel Lavender
      '#BBD0FF', // Lite Pastel Baby Blue
      '#C8F7DC', // Lite Pastel Mint Green
      '#FEE4A0', // Soft Pastel Gold / Champagne
      '#FFC6C7', // Lite Pastel Coral Pink
      '#E8D7F1', // Lite Pastel Lilac
      '#FFF4CC', // Soft Pastel Buttercream
      '#FFFFFF'  // Shimmering Pearl White
    ];

    const addSparkle = (x, y, count = 4) => {
      for (let i = 0; i < count; i++) {
        sparkles.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          size: Math.random() * 5 + 3, // slightly more visible delicate stars
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.2 - 0.9, // gentle soft float
          life: 1,
          decay: Math.random() * 0.022 + 0.016
        });
      }
    };

    // Tap / Click spawns a generous cluster of lite pastel sparkles
    const handlePointerDown = (e) => {
      addSparkle(e.clientX, e.clientY, 8);
    };

    // Move spawns continuous lite pastel sparkles trail
    const handlePointerMove = (e) => {
      addSparkle(e.clientX, e.clientY, 3);
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        addSparkle(t.clientX, t.clientY, 9);
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        addSparkle(t.clientX, t.clientY, 4);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const p = sparkles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;

        // Draw original 4-point star sparkle
        const s = p.size * p.life;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - s);
        ctx.quadraticCurveTo(p.x, p.y, p.x + s, p.y);
        ctx.quadraticCurveTo(p.x, p.y, p.x, p.y + s);
        ctx.quadraticCurveTo(p.x, p.y, p.x - s, p.y);
        ctx.quadraticCurveTo(p.x, p.y, p.x, p.y - s);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ opacity: 0.95 }}
    />
  );
};
