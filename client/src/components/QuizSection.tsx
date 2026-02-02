/* Quiz Section - Romantic Ethereal Design
 * Relationship quiz with validation
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function QuizSection() {
  const [visible, setVisible] = useState(false);
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
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

  const checkQuiz = () => {
    const a1 = q1.toLowerCase().trim();
    const a2 = q2.toLowerCase().trim();
    const a3 = q3.toLowerCase().trim();

    // Check answers (case-insensitive)
    if (
      a1 === "c/o kancharapalem" &&
      a2 === "maldives" &&
      a3 === "home"
    ) {
      setResult("Perfect ❤️ You know us so well!");
      toast.success("All correct! Moving to our memories...");
      setTimeout(() => {
        document
          .getElementById("slideshow")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 2000);
    } else {
      setResult("Almost there 😘 Try again, my love.");
      toast.error("Not quite right. Think about our special moments!");
    }
  };

  return (
    <section
      id="quiz"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-pink-50/50 to-white"
    >
      <div className="max-w-2xl w-full">
        <h2
          className={`text-4xl md:text-5xl mb-6 text-center transition-all duration-1200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#8B4A5E" }}
        >
          Relationship Quiz 🎯
        </h2>
        <p
          className={`text-lg md:text-xl mb-12 text-center transition-all duration-1200 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#5A3A47" }}
        >
          Answer these questions correctly to continue 💕
        </p>

        <div
          className={`space-y-8 transition-all duration-1200 delay-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div>
            <label className="block text-lg mb-3" style={{ color: "#5A3A47" }}>
              Which movie did we watch on our movie date?
            </label>
            <Input
              value={q1}
              onChange={(e) => setQ1(e.target.value)}
              placeholder="Your answer..."
              className="text-lg py-6 rounded-2xl border-2 border-pink-200 focus:border-pink-400"
            />
          </div>

          <div>
            <label className="block text-lg mb-3" style={{ color: "#5A3A47" }}>
              Where did we have our first night date?
            </label>
            <Input
              value={q2}
              onChange={(e) => setQ2(e.target.value)}
              placeholder="Your answer..."
              className="text-lg py-6 rounded-2xl border-2 border-pink-200 focus:border-pink-400"
            />
          </div>

          <div>
            <label className="block text-lg mb-3" style={{ color: "#5A3A47" }}>
              What is our favourite place?
            </label>
            <Input
              value={q3}
              onChange={(e) => setQ3(e.target.value)}
              placeholder="Your answer..."
              className="text-lg py-6 rounded-2xl border-2 border-pink-200 focus:border-pink-400"
            />
          </div>

          <div className="text-center pt-4">
            <Button
              onClick={checkQuiz}
              className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-8 py-6 text-lg rounded-full"
            >
              Submit Answers
            </Button>
            {result && (
              <p className="mt-6 text-xl accent-text" style={{ color: "#D97398" }}>
                {result}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
