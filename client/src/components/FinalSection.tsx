/* Final Section - Romantic Ethereal Design
 * The proposal moment
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function FinalSection() {
  const [visible, setVisible] = useState(false);
  const [answered, setAnswered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleYes = () => {
    setAnswered(true);
    toast.success("You made me the happiest person alive! ❤️", {
      duration: 5000,
    });
    // Create confetti effect
    createConfetti();
  };

  const createConfetti = () => {
    const colors = ["#FFB6C1", "#FFC0CB", "#FFD4E5", "#FF69B4", "#FF1493"];
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = "50%";
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";
        confetti.style.animation = `fall ${2 + Math.random() * 2}s linear`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
      }, i * 30);
    }
  };

  return (
    <>
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      <section
        id="final"
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-rose-50/30 to-pink-100/50"
      >
        <div className="max-w-3xl text-center">
          <h1
            className={`text-5xl md:text-7xl mb-8 transition-all duration-1200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ color: "#8B4A5E" }}
          >
            One Last Thing…
          </h1>
          <p
            className={`text-xl md:text-2xl mb-12 leading-relaxed transition-all duration-1200 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ color: "#5A3A47", lineHeight: "1.8" }}
          >
            I want to wake up next to you for the rest of my life. I want to
            share every sunrise, every adventure, every quiet moment. I want to
            build a home filled with love, laughter, and endless memories.
          </p>
          <h2
            className={`text-4xl md:text-6xl mb-12 accent-text transition-all duration-1200 delay-600 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ color: "#D97398" }}
          >
            Will you be my valentine? 💕
          </h2>

          {!answered ? (
            <div
              className={`flex gap-6 justify-center transition-all duration-1200 delay-900 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <Button
                onClick={handleYes}
                size="lg"
                className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-12 py-8 text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
              >
                Yes! 💕
              </Button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <p className="text-3xl accent-text mb-6" style={{ color: "#D97398" }}>
                You make me the happiest! 💕
              </p>
              <p className="text-xl" style={{ color: "#5A3A47" }}>
                Thank you for being my valentine. Here's to more beautiful moments
                together! 🌹
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
