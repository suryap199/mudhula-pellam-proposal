/* Note Section - Romantic Ethereal Design
 * Soft message section with fade-in animation
 */

import { useEffect, useRef, useState } from "react";

export default function NoteSection() {
  const [visible, setVisible] = useState(false);
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

  return (
    <section
      id="note1"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-pink-50/50 to-white"
    >
      <div className="max-w-2xl text-center">
        <h2
          className={`text-4xl md:text-5xl mb-8 transition-all duration-1200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#8B4A5E" }}
        >
          A Little Note
        </h2>
        <p
          className={`text-lg md:text-xl leading-relaxed transition-all duration-1200 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#5A3A47", lineHeight: "1.8" }}
        >
          From the moment you walked into my life, everything felt warmer,
          softer, brighter. You turned ordinary days into beautiful memories,
          and every moment with you feels like a gift I never want to unwrap
          too quickly.
        </p>
      </div>
    </section>
  );
}
