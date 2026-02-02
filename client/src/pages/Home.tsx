/* Romantic Ethereal Design
 * Soft watercolor aesthetics with flowing sections
 * Gentle animations and delicate interactions
 */

import { useEffect, useRef, useState } from "react";
import IntroSection from "@/components/IntroSection";
import NoteSection from "@/components/NoteSection";
import GameSection from "@/components/GameSection";
import PuzzleSection from "@/components/PuzzleSection";
import QuizSection from "@/components/QuizSection";
import MemoriesSection from "@/components/MemoriesSection";
import FinalSection from "@/components/FinalSection";
import FloatingHearts from "@/components/FloatingHearts";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startExperience = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
      setMusicPlaying(true);
    }
    // Scroll to next section
    document.getElementById("note1")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background music - optional, will be silent if no audio file */}
      <audio ref={audioRef} loop>
        {/* No audio source - removed to avoid errors */}
      </audio>

      <FloatingHearts />
      <ScrollIndicator targetId="note1" />
      
      <IntroSection onStart={startExperience} />
      <NoteSection />
      <GameSection />
      <PuzzleSection />
      <QuizSection />
      <MemoriesSection />
      <FinalSection />
    </div>
  );
}
