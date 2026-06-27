"use client";

import { UtensilsCrossed, Heart, Home } from "lucide-react";
import { NOSOTROS } from "@/lib/contenido";
import Reveal from "./Reveal";

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed size={24} className="text-acento" />,
  Heart: <Heart size={24} className="text-acento" />,
  Home: <Home size={24} className="text-acento" />,
};

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-crema">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Reveal>
          <span className="text-acento text-sm font-medium uppercase tracking-widest block mb-2">
            {NOSOTROS.eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bordo mb-10 md:mb-12">
            {NOSOTROS.title}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16">
          <div className="md:col-span-3 space-y-4">
            {NOSOTROS.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <p className="text-texto/80 text-base md:text-lg leading-relaxed">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-2 space-y-4">
            {NOSOTROS.values.map((v, i) => (
              <Reveal key={v.title} delay={0.1 * i}>
                <div className="bg-blanco rounded-2xl p-5 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-bordo flex items-center justify-center shrink-0">
                    {iconMap[v.icon]}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-texto">
                      {v.title}
                    </h3>
                    <p className="text-texto/60 text-sm mt-1 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
