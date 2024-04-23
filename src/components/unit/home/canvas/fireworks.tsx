import React, { useEffect, useRef } from 'react';

const Fireworks = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let fireworks = [];
    let particles = [];

    function Firework(sx, sy, tx, ty) {
      this.x = sx; 
      this.y = sy; 
      this.sx = sx;
      this.sy = sy;
      this.tx = tx; 
      this.ty = ty; 
      this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
      this.distanceTraveled = 0;
      this.coordinates = [];
      this.coordinateCount = 3;
      while(this.coordinateCount--) {
        this.coordinates.push([this.x, this.y]);
      }
      this.angle = Math.atan2(ty - sy, tx - sx);
      this.speed = 2;
      this.acceleration = 1.05;
      this.brightness = random(50, 70);
    }

    Firework.prototype.update = function(index) {
      this.coordinates.pop();
      this.coordinates.unshift([this.x, this.y]);
      
      if (this.speed < 3) {
        this.speed *= this.acceleration;
      }
      
      let vx = Math.cos(this.angle) * this.speed;
      let vy = Math.sin(this.angle) * this.speed;
      this.distanceTraveled = calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);
      
      if (this.distanceTraveled >= this.distanceToTarget) {
        createParticles(this.tx, this.ty);
        fireworks.splice(index, 1);
      } else {
        this.x += vx;
        this.y += vy;
      }
    };

    Firework.prototype.draw = function() {
      ctx.beginPath();
      ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = 'hsl(' + this.brightness + ', 100%, 50%)';
      ctx.stroke();
    };

    function Particle(x, y) {
      this.x = x;
      this.y = y;
      this.coordinates = [];
      this.coordinateCount = 5;
      while(this.coordinateCount--) {
        this.coordinates.push([this.x, this.y]);
      }
      this.angle = random(0, Math.PI * 2);
      this.speed = random(1, 10);
      this.friction = 0.95;
      this.gravity = 1;
      this.hue = random(0, 360);
      this.brightness = random(50, 80);
      this.alpha = 1;
      this.decay = random(0.015, 0.03);
    }

    Particle.prototype.update = function(index) {
      this.coordinates.pop();
      this.coordinates.unshift([this.x, this.y]);
      this.speed *= this.friction;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed + this.gravity;
      this.alpha -= this.decay;

      if (this.alpha <= this.decay) {
        particles.splice(index, 1);
      }
    };

    Particle.prototype.draw = function() {
      ctx.beginPath();
      ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
      ctx.stroke();
    };

    function createParticles(x, y) {
      let particleCount = 30;
      while (particleCount--) {
        particles.push(new Particle(x, y));
      }
    }

    function loop() {
      requestAnimationFrame(loop);
      
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      fireworks.forEach((firework, index) => {
        firework.update(index);
        firework.draw();
      });

      particles.forEach((particle, index) => {
        particle.update(index);
        particle.draw();
      });

      if (Math.random() < 0.05) {
        fireworks.push(new Firework(canvas.width / 2, canvas.height, random(0, canvas.width), canvas.height / 2));
      }
    }

    loop();
    
    function calculateDistance(p1x, p1y, p2x, p2y) {
      let xDistance = p1x - p2x;
      let yDistance = p1y - p2y;
      return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position:'absolute',bottom:'5rem' }} />;
};

export default Fireworks;
