/* Scroll Indicator - Animated Down Arrow
 * Transparent arrow that bounces to indicate scrolling
 */

import { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  targetId?: string;
}

export default function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide arrow after user starts scrolling
      if (window.scrollY > 100) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 cursor-pointer"
      style={{
        animation: "bounce 2s infinite",
      }}
    >
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateX(-50%) translateY(10px);
            opacity: 1;
          }
        }
      `}</style>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <path
          d="M16 24L8 16M16 24L24 16M16 24V8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "#D97398", opacity: 0.7 }}
        />
      </svg>
    </div>
  );
}
