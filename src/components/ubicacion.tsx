"use client";

import { MapPin, ExternalLink } from "lucide-react";
import { UBICACION, RESTAURANTE } from "@/lib/contenido";
import { externalLinkProps } from "@/lib/utils";
import Reveal from "./Reveal";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-bordo-dark">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal className="md:col-span-3 rounded-2xl overflow-hidden shadow-lg aspect-[16/9] relative">
            <iframe
              src={UBICACION.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups"
              title="Ubicación de Mirasoles en Google Maps"
              className="w-full h-full"
            />
            <noscript>
              <a
                href={RESTAURANTE.googleMaps}
                {...externalLinkProps}
                className="absolute inset-0 flex items-center justify-center bg-bordo-dark text-acento underline"
              >
                Ver en Google Maps
              </a>
            </noscript>
          </Reveal>

          <div className="md:col-span-2 flex flex-col gap-6">
            <Reveal>
              <span className="text-acento text-sm font-medium uppercase tracking-[0.2em] block">
                Ubicación
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-blanco leading-tight tracking-tight mt-2">
                {UBICACION.title}
              </h2>
              <div className="w-16 h-1 bg-acento mt-5 rounded-full" />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex items-start gap-3">
                <MapPin size={22} className="text-acento shrink-0 mt-1" aria-hidden="true" />
                <p className="text-crema/80 text-base md:text-lg">
                  {UBICACION.direccion}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <a
                href={RESTAURANTE.googleMaps}
                {...externalLinkProps}
                className="shine inline-flex items-center gap-2 bg-acento hover:bg-acento/90 text-bordo-dark px-6 py-3.5 rounded-full text-base font-semibold transition-all self-start shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                aria-label={UBICACION.cta}
              >
                <ExternalLink size={18} aria-hidden="true" />
                <span>{UBICACION.cta}</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
