"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALERIA } from "@/lib/contenido";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const INTERVALO = 3500;

export default function Galeria() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  const total = GALERIA.media.length;

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (!child) return;
    const containerRect = el.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const targetLeft =
      el.scrollLeft +
      (childRect.left - containerRect.left) -
      (containerRect.width - childRect.width) / 2;
    el.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const idx = ((index % total) + total) % total;
      setCurrentIndex(idx);
      scrollToIndex(idx);
    },
    [total, scrollToIndex],
  );

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIdx = (prev + 1) % total;
        scrollToIndex(nextIdx);
        return nextIdx;
      });
    }, INTERVALO);
    return () => clearInterval(id);
  }, [isPaused, total, scrollToIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio > 0.5) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!isNaN(idx) && currentIndexRef.current !== idx) {
              setCurrentIndex(idx);
            }
            break;
          }
        }
      },
      { root: el, threshold: 0.5 },
    );
    const children = Array.from(el.children);
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-crema overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeading
          title={GALERIA.title}
          subtitle={GALERIA.subtitle}
          align="center"
        />
      </div>

      <div
        className="relative max-w-6xl mx-auto px-4 md:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <button
          onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-blanco/90 hover:bg-blanco shadow-lg flex items-center justify-center transition-all"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} className="text-texto" aria-hidden="true" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-blanco/90 hover:bg-blanco shadow-lg flex items-center justify-center transition-all"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} className="text-texto" aria-hidden="true" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {GALERIA.media.map((item, i) => {
            const isActive = i === currentIndex;
            return (
              <div
                key={item.src}
                data-index={i}
                className={`group snap-center shrink-0 w-[85vw] md:w-[500px] aspect-[4/3] rounded-2xl overflow-hidden relative bg-oliva/10 transition-all duration-500 ${
                  isActive
                    ? "md:scale-100 opacity-100 shadow-xl"
                    : "md:scale-90 opacity-60 shadow-md"
                }`}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 85vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-3 mt-5">
          {GALERIA.media.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all ${
                i === currentIndex ? "bg-bordo w-8 h-3" : "bg-bordo/30 w-3 h-3"
              }`}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
