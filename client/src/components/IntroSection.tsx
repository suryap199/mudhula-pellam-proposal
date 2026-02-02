/* Intro Section - Romantic Ethereal Design
 * Hero section with soft background and welcoming message
 */

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface IntroSectionProps {
  onStart: () => void;
}

export default function IntroSection({ onStart }: IntroSectionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/jACezXBmAEdLRBfH.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60" />

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1
          className={`text-5xl md:text-7xl mb-6 transition-all duration-1200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#8B4A5E" }}
        >
          Hey Mudhula Pellam ❤️
        </h1>
        <p
          className={`text-lg md:text-xl mb-8 transition-all duration-1200 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#5A3A47", lineHeight: "1.8" }}
        >
          I made something special for you. Take a deep breath… and let's begin.
        </p>
        <div
          className={`transition-all duration-1200 delay-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Button
            onClick={onStart}
            size="lg"
            className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Our Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
