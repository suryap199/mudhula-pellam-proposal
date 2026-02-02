/* Puzzle Section - Romantic Ethereal Design
 * Interactive drag-and-drop puzzle game
 */

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// Puzzle piece URLs from CDN
const PUZZLE_PIECES = [
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/lWjBAznLBEwUUjic.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/xrYJFjNcNUvOzLNp.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/JSQjlvAJVYSwpJpQ.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/myVsoNjzoSlLsWld.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/nVLYXtVZjqxypfAq.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/efjOXUqgnzipFmBT.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/txEEtqbHYiPrCDLy.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/pliQiWZHJwAFgWpO.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/TBDbYCNTOfefUKEz.jpg",
];

export default function PuzzleSection() {
  const [visible, setVisible] = useState(false);
  const [pieces, setPieces] = useState<number[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            // Initialize shuffled puzzle
            if (pieces.length === 0) {
              const shuffled = Array.from({ length: 9 }, (_, i) => i).sort(
                () => Math.random() - 0.5
              );
              setPieces(shuffled);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [pieces.length]);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedIndex === null) return;

    const newPieces = [...pieces];
    [newPieces[draggedIndex], newPieces[dropIndex]] = [
      newPieces[dropIndex],
      newPieces[draggedIndex],
    ];
    setPieces(newPieces);
    setDraggedIndex(null);

    // Check if puzzle is complete
    const isComplete = newPieces.every((piece, index) => piece === index);
    if (isComplete && !completed) {
      setCompleted(true);
      toast.success("Perfect! You completed the puzzle! 🎉");
      setTimeout(() => {
        document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
      }, 2000);
    }
  };

  return (
    <section
      id="puzzle"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-rose-50/30 to-pink-50/50"
    >
      <div className="max-w-3xl text-center">
        <h2
          className={`text-4xl md:text-5xl mb-6 transition-all duration-1200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#8B4A5E" }}
        >
          Our Special Puzzle 🧩
        </h2>
        <p
          className={`text-lg md:text-xl mb-12 transition-all duration-1200 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#5A3A47" }}
        >
          Drag the pieces to complete the image of our love.
        </p>
        <div
          className={`grid grid-cols-3 gap-2 max-w-md mx-auto transition-all duration-1200 delay-600 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {pieces.map((pieceIndex, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              className="aspect-square cursor-move hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
              style={{
                opacity: draggedIndex === index ? 0.5 : 1,
              }}
            >
              <img
                src={PUZZLE_PIECES[pieceIndex]}
                alt={`Puzzle piece ${pieceIndex + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
        {completed && (
          <p className="mt-8 text-2xl accent-text animate-bounce" style={{ color: "#D97398" }}>
            Beautiful! Just like us ❤️
          </p>
        )}
      </div>
    </section>
  );
}
