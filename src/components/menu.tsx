"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X, Eye } from "lucide-react";
import { MENU_SECTION } from "@/lib/contenido";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CartaViewer from "./CartaViewer";

export default function Menu() {
  const [selected, setSelected] = useState<string | null>(null);

  const reset = () => setSelected(null);

  return (
    <section id="menu" className="py-20 md:py-28 bg-bordo-dark">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeading
          title={MENU_SECTION.title}
          subtitle={MENU_SECTION.subtitle}
          variant="dark"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {MENU_SECTION.items.map((item, i) => (
            <Reveal key={i} delay={0.15 * i}>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setSelected(item.image)}
                  className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-bordo ring-1 ring-acento/10 shadow-lg hover:shadow-2xl hover:ring-acento/40 transition-all cursor-pointer active:scale-[0.99]"
                  aria-label={`Ver ${item.label}`}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 90vw, 600px"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bordo-dark via-bordo-dark/70 to-transparent p-4 pb-5 flex items-end justify-between gap-3">
                    <span className="text-blanco font-display text-xl md:text-2xl font-bold">
                      {item.label}
                    </span>
                    <span className="flex items-center gap-1.5 bg-acento text-bordo-dark text-xs font-semibold px-3 py-1.5 rounded-full opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shrink-0">
                      <Eye size={14} aria-hidden="true" />
                      Ver carta
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
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  aria-describedby={undefined}
                  className="fixed inset-0 z-50 flex flex-col bg-bordo-dark/98"
                >
                  <div className="flex items-center justify-between gap-3 px-4 h-14 bg-black/50 shrink-0">
                    <Dialog.Title className="text-blanco font-display text-base sm:text-lg font-bold truncate">
                      {MENU_SECTION.items.find((it) => it.image === selected)?.label ?? "Carta"}
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        className="text-blanco hover:text-acento transition-colors p-2 -mr-2 shrink-0"
                        aria-label="Cerrar carta"
                      >
                        <X size={28} aria-hidden="true" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <CartaViewer key={selected} src={selected} />
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}
