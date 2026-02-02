/* Floating Hearts - Romantic Ethereal Design
 * Ambient heart animations floating across the screen
 */

import { useEffect } from "react";

export default function FloatingHearts() {
  useEffect(() => {
    const interval = setInterval(() => {
      createHeart();
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const createHeart = () => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (15 + Math.random() * 15) + "px";
    heart.style.color = `hsl(${340 + Math.random() * 20}, 80%, ${
      60 + Math.random() * 20
    }%)`;
    heart.style.opacity = (0.4 + Math.random() * 0.4).toString();
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1";
    heart.style.animation = `floatUp ${5 + Math.random() * 3}s linear`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  };

  return (
    <style>{`
      @keyframes floatUp {
        from {
          transform: translateY(0) rotate(0deg);
          opacity: 0.6;
        }
        to {
          transform: translateY(-120vh) rotate(${Math.random() * 360}deg);
          opacity: 0;
        }
      }
    `}</style>
  );
}
