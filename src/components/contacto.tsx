"use client";

import { Phone, MapPin } from "lucide-react";
import { CONTACTO } from "@/lib/contenido";
import { externalLinkProps } from "@/lib/utils";
import Reveal from "./Reveal";

const InstagramIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  whatsapp: <Phone size={28} className="text-blanco" aria-hidden="true" />,
  instagram: <InstagramIcon size={28} className="text-blanco" />,
  map: <MapPin size={28} className="text-texto" aria-hidden="true" />,
};

const bgMap: Record<string, string> = {
  whatsapp: "bg-oliva",
  instagram: "bg-bordo",
  map: "bg-acento",
};

const textColorMap: Record<string, string> = {
  whatsapp: "text-blanco",
  instagram: "text-blanco",
  map: "text-texto",
};

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-crema">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Reveal>
          <div className="text-center mb-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bordo mb-4">
              {CONTACTO.title}
            </h2>
            <p className="text-texto/70 text-lg max-w-xl mx-auto">
              {CONTACTO.subtitle}
            </p>
            <div className="w-16 h-1 bg-acento mx-auto mt-4" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {CONTACTO.channels.map((ch, i) => (
            <Reveal key={ch.label} delay={0.15 * i}>
              <a
                href={ch.href}
                {...externalLinkProps}
                className={`${bgMap[ch.icon]} ${textColorMap[ch.icon]} rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}
                aria-label={ch.label}
              >
                <div className="w-14 h-14 rounded-full bg-blanco/10 flex items-center justify-center">
                  {iconMap[ch.icon]}
                </div>
                <h3 className="font-display text-lg font-bold">{ch.label}</h3>
                {ch.label === "WhatsApp" ? (
                  <p className={`text-sm ${textColorMap[ch.icon]}/70`} aria-label="Teléfono 2622 408799">
                    <span>2622</span>
                    <span aria-hidden="true"> </span>
                    <span>408</span>
                    <span>799</span>
                  </p>
                ) : (
                  <p className={`text-sm ${textColorMap[ch.icon]}/70`}>
                    {ch.value}
                  </p>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
