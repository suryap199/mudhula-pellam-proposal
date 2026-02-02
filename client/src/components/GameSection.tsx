/* Game Section - Romantic Ethereal Design
 * Interactive name guessing game
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GameSection() {
  const [visible, setVisible] = useState(false);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
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

  const checkAnswer = () => {
    const val = answer.toLowerCase().trim();
    if (val === "mudhula pellam") {
      setResult("Of course ❤️ You know me so well!");
      setTimeout(() => {
        document.getElementById("puzzle")?.scrollIntoView({ behavior: "smooth" });
      }, 1500);
    } else {
      setResult("Try again, my love 😘");
    }
  };

  return (
    <section
      id="game"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-rose-50/30"
    >
      <div className="max-w-xl text-center w-full">
        <h2
          className={`text-4xl md:text-5xl mb-8 transition-all duration-1200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#8B4A5E" }}
        >
          A Small Challenge
        </h2>
        <p
          className={`text-lg md:text-xl mb-8 transition-all duration-1200 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#5A3A47" }}
        >
          Type my favorite person's name (hint: it's you!)
        </p>
        <div
          className={`transition-all duration-1200 delay-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
            placeholder="Mudhula Pellam"
            className="mb-4 text-center text-lg py-6 rounded-full border-2 border-pink-200 focus:border-pink-400"
          />
          <Button
            onClick={checkAnswer}
            className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-8 py-6 text-lg rounded-full"
          >
            Submit
          </Button>
          {result && (
            <p className="mt-6 text-xl accent-text animate-fade-in" style={{ color: "#D97398" }}>
              {result}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
