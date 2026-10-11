import React, { useEffect, useRef } from 'react';

export const FloatingPetals = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Petals configurations
    const petalCount = 24;
    const petals = [];

    const colors = [
      'rgba(212, 175, 55, 0.45)',  // Royal Gold shimmer
      'rgba(244, 162, 97, 0.45)',  // Marigold Orange
      'rgba(231, 111, 81, 0.4)',   // Royal Sindoor / Coral
      'rgba(235, 140, 150, 0.45)', // Pastel Rose Petal
      'rgba(255, 223, 137, 0.5)'   // Turmeric Yellow
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.8 + 0.4,
        speedX: Math.random() * 0.6 - 0.3,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
        swayAmplitude: Math.random() * 1.5 + 0.5,
        swayPhase: Math.random() * Math.PI * 2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((petal) => {
        petal.y += petal.speedY;
        petal.x += Math.sin(petal.swayPhase) * petal.swayAmplitude + petal.speedX;
        petal.swayPhase += 0.02;
        petal.angle += petal.angularSpeed;

        if (petal.y > height + 20) {
          petal.y = -20;
          petal.x = Math.random() * width;
        }
        if (petal.x > width + 20) petal.x = -20;
        if (petal.x < -20) petal.x = width + 20;

        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate(petal.angle);

        // Draw organic petal curve
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(
          petal.size / 2, -petal.size,
          petal.size * 1.5, -petal.size / 2,
          petal.size, petal.size
        );
        ctx.bezierCurveTo(
          petal.size / 2, petal.size * 1.4,
          -petal.size / 2, petal.size * 0.8,
          0, 0
        );
        ctx.fillStyle = petal.color;
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ opacity: 0.85 }}
    />
  );
};
