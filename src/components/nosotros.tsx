"use client";

import { UtensilsCrossed, Heart, Home } from "lucide-react";
import { NOSOTROS } from "@/lib/contenido";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SunMark from "./SunMark";

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed size={24} className="text-acento" />,
  Heart: <Heart size={24} className="text-acento" />,
  Home: <Home size={24} className="text-acento" />,
};

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative py-20 md:py-28 bg-crema overflow-hidden">
      <SunMark
        color="var(--color-acento)"
        className="animate-spin-slow pointer-events-none absolute -right-24 -top-24 w-72 h-72 opacity-[0.06]"
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow={NOSOTROS.eyebrow}
          title={NOSOTROS.title}
          align="center"
        />

        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
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
                <div className="group bg-blanco rounded-2xl p-5 flex items-start gap-4 border border-bordo/5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-full bg-bordo flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
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
