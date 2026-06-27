"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus, Minus } from "lucide-react";
import { MENU_SECTION } from "@/lib/contenido";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Menu() {
  const [selected, setSelected] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  const reset = () => { setSelected(null); setScale(1); };

  return (
    <section id="menu" className="py-20 md:py-28 bg-bordo-dark">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-blanco mb-4">
              {MENU_SECTION.title}
            </h2>
            <p className="text-crema/70 text-lg">{MENU_SECTION.subtitle}</p>
            <div className="w-16 h-1 bg-acento mx-auto mt-4" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {MENU_SECTION.items.map((item, i) => (
            <Reveal key={i} delay={0.15 * i}>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => { setSelected(item.image); setScale(1); }}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-bordo shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  aria-label={`Ver ${item.label}`}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 90vw, 600px"
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bordo-dark/90 to-transparent p-4 pb-5">
                    <span className="text-blanco font-display text-xl md:text-2xl font-bold">
                      {item.label}
                    </span>
                  </div>
                </button>
                <p className="text-crema/60 text-sm text-center">{item.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog.Root open={!!selected} onOpenChange={(open) => { if (!open) reset(); }}>
        <AnimatePresence>
          {selected && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/0 z-50"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-50 flex flex-col"
                >
                  <div className="relative flex-1 overflow-auto p-4">
                    <Dialog.Close asChild>
                      <button
                        className="fixed top-3 right-3 text-blanco hover:text-acento transition-colors z-20"
                        aria-label="Cerrar menú"
                      >
                        <X size={32} aria-hidden="true" />
                      </button>
                    </Dialog.Close>

                    <div
                      style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
                    >
                      <img
                        src={selected}
                        alt="Menú Mirasoles"
                        className="max-w-none"
                        draggable={false}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 py-3 bg-black/60">
                    <button
                      onClick={() => setScale((s) => Math.max(0.25, +(s - 0.25).toFixed(2)))}
                      className="text-blanco hover:text-acento transition-colors p-3 md:p-2"
                      aria-label="Alejar"
                    >
                      <Minus size={22} aria-hidden="true" />
                    </button>
                    <span className="text-blanco text-sm font-medium w-14 text-center tabular-nums">
                      {Math.round(scale * 100)}%
                    </span>
                    <button
                      onClick={() => setScale((s) => Math.min(4, +(s + 0.25).toFixed(2)))}
                      className="text-blanco hover:text-acento transition-colors p-3 md:p-2"
                      aria-label="Acercar"
                    >
                      <Plus size={22} aria-hidden="true" />
                    </button>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}
