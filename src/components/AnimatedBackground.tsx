import React, { useEffect, useRef, useState } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Handle video load state
  const handleVideoCanPlay = () => {
    setVideoLoaded(true);
  };

  // Mouse parallax motion coordinates tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse positions between -1 and 1
      const targetX = (e.clientX / window.innerWidth) * 2 - 1;
      const targetY = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse((prev) => ({ ...prev, targetX, targetY }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update current mouse coordinates smoothly (lerp)
  useEffect(() => {
    let animId: number;
    const updateLerp = () => {
      setMouse((prev) => {
        const dx = prev.targetX - prev.x;
        const dy = prev.targetY - prev.y;
        return {
          ...prev,
          x: prev.x + dx * 0.05,
          y: prev.y + dy * 0.05,
        };
      });
      animId = requestAnimationFrame(updateLerp);
    };
    animId = requestAnimationFrame(updateLerp);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Canvas Plexus Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class definition
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      baseX: number;
      baseY: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        // Natural movement
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Interactive mouse parallax shifting
        this.baseX = this.x;
        this.baseY = this.y;
      }

      draw(context: CanvasRenderingContext2D, mouseX: number, mouseY: number) {
        context.beginPath();
        // Shift drawing coordinates based on lerped mouse parallax coordinates
        const drawX = this.x - mouseX * 15;
        const drawY = this.y - mouseY * 15;

        context.arc(drawX, drawY, this.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(0, 240, 255, ${this.alpha})`;
        context.fill();
      }
    }

    // Initialize particles
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    const particles: Particle[] = Array.from({ length: particleCount }, () => new Particle());

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw constellation grid connections
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx, mouse.x, mouse.y);

        const pi = particles[i];
        const piX = pi.x - mouse.x * 15;
        const piY = pi.y - mouse.y * 15;

        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          const pjX = pj.x - mouse.x * 15;
          const pjY = pj.y - mouse.y * 15;

          const dx = piX - pjX;
          const dy = piY - pjY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect particles within proximity
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(piX, piY);
            ctx.lineTo(pjX, pjY);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouse.x, mouse.y]);

  return (
    <div ref={containerRef} className="global-bg-container">
      {/* Fallback Static Gradient Background */}
      <div className="global-bg-fallback"></div>

      {/* Abstract Plexus / Grid Background Video */}
      <video
        className={`global-bg-video ${videoLoaded ? 'loaded' : ''}`}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={handleVideoCanPlay}
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e369137a1f7e3f283a0058b88eb&profile_id=139&oauth2_token_id=57447761"
      />

      {/* Interactive Constellation Plexus Canvas */}
      <canvas ref={canvasRef} className="global-bg-canvas" />

      {/* Dark Overlay Gradients for Readability */}
      <div className="global-bg-overlay"></div>
    </div>
  );
};

export default AnimatedBackground;
