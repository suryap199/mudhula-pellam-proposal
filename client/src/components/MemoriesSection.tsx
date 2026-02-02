/* Memories Section - Romantic Ethereal Design
 * Photo carousel using Embla Carousel
 */

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MEMORY_IMAGES = [
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/sYgsHjyNVBXeBofC.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/FCNUUPMplHUnvZBq.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663331240361/cQcNCcofdaEYvjOr.jpg",
];

export default function MemoriesSection() {
  const [visible, setVisible] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section
      id="slideshow"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-rose-50/30"
    >
      <div className="max-w-4xl w-full">
        <h2
          className={`text-4xl md:text-5xl mb-12 text-center transition-all duration-1200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#8B4A5E" }}
        >
          Our Beautiful Memories 📸
        </h2>

        <div
          className={`relative transition-all duration-1200 delay-300 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl" ref={emblaRef}>
            <div className="flex">
              {MEMORY_IMAGES.map((src, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <img
                    src={src}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            onClick={scrollPrev}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-12 h-12 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={scrollNext}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-12 h-12 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <p
          className={`text-lg md:text-xl mt-12 text-center transition-all duration-1200 delay-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ color: "#5A3A47", lineHeight: "1.8" }}
        >
          Every photo tells a story. Every story leads to you. Every moment with
          you is a memory I treasure forever.
        </p>
      </div>
    </section>
  );
}
