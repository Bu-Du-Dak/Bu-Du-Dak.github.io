import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';

const CanvasStyled = styled.canvas`
  width: 100%;
  height: 100vh;
  background: transparent;
`;

const RainFallComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const drops = [];
    let animationFrameId;

    class Drop {
      index: number;
      x: number;
      y: number;
      speed: number;
      length: number;
      constructor(index, x, y, speed, length) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.length = length;
      }

      draw() {
        context.beginPath();
        context.strokeStyle = '#dfdfdf';
        context.moveTo(this.x, this.y);
        context.lineTo(this.x, this.y + this.length);
        context.stroke();
        context.closePath();
      }
    }

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = 0;
          drop.x = Math.random() * canvas.width;
          drop.speed = Math.random() * 6 + 1;
          drop.length = Math.random() * 5 + 2;
        }
        drop.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speed = Math.random() * 2 + 1;
      const length = Math.random() * 5 + 2;
      drops.push(new Drop(i, x, y, speed, length));
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <CanvasStyled ref={canvasRef} width={1000} height={400} />;
};

export default RainFallComponent;
