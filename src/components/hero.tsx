"use client";

import { ArrowDown, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { HERO, RESTAURANTE } from "@/lib/contenido";
import { scrollToSection, externalLinkProps } from "@/lib/utils";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bordo-dark"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-blanco/5" />
        <div className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-blanco/[0.08]" />
        <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-blanco/[0.06]" />
        <div className="absolute w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full border border-acento/20" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center gap-6"
      >
        <motion.div variants={item} className="ring-2 ring-acento rounded-full">
          <Image
            src="/logo.png"
            alt="Logo de Mirasoles restaurante en La Consulta Mendoza"
            width={80}
            height={80}
            priority
            className="rounded-full"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl md:text-7xl font-black text-blanco leading-tight"
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-crema/90 font-light max-w-md"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2"
        >
          <a
            href={RESTAURANTE.whatsapp}
            {...externalLinkProps}
            className="flex items-center gap-2 bg-acento hover:bg-acento/90 text-bordo-dark px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl"
            aria-label={HERO.cta_primary}
          >
            <Phone size={20} aria-hidden="true" />
            <span>{HERO.cta_primary}</span>
          </a>
          <a
            href={RESTAURANTE.googleMaps}
            {...externalLinkProps}
            className="flex items-center gap-2 border-2 border-crema/70 text-crema hover:bg-blanco/10 px-8 py-4 rounded-full text-base font-medium transition-all"
            aria-label={HERO.cta_secondary}
          >
            <MapPin size={20} aria-hidden="true" />
            <span>{HERO.cta_secondary}</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#nosotros"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("nosotros");
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-crema/60 hover:text-crema transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} className="animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
