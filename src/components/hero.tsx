"use client";

import { useRef } from "react";
import { ArrowDown, Phone, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ringsY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="grain relative min-h-screen flex items-center justify-center overflow-hidden bg-bordo-dark"
    >
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        <Image
          src="/02.jpg"
          alt="Interior del restaurante Mirasoles en La Consulta, Mendoza"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-bordo-dark/85 via-bordo/75 to-bordo-dark/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(42,8,9,0.55)_75%)]" />

      <motion.div
        style={{ y: ringsY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-blanco/10" />
        <div className="absolute w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-blanco/[0.12]" />
        <div className="absolute w-[190px] h-[190px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-blanco/[0.08]" />
        <div className="absolute w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[200px] md:h-[200px] rounded-full border border-acento/30" />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-5 max-w-3xl mx-auto flex flex-col items-center gap-5 sm:gap-6"
      >
        <motion.div variants={item} className="ring-2 ring-acento rounded-full shadow-2xl">
          <Image
            src="/logo.png"
            alt="Logo de Mirasoles restaurante en La Consulta Mendoza"
            width={80}
            height={80}
            priority
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-blanco leading-tight tracking-tight drop-shadow-lg"
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-xl text-crema/90 font-light max-w-md"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          variants={item}
          className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-2"
        >
          <a
            href={RESTAURANTE.whatsapp}
            {...externalLinkProps}
            className="shine flex items-center justify-center gap-2 bg-acento hover:bg-acento/90 text-bordo-dark px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            aria-label={HERO.cta_primary}
          >
            <Phone size={20} aria-hidden="true" />
            <span>{HERO.cta_primary}</span>
          </a>
          <a
            href={RESTAURANTE.googleMaps}
            {...externalLinkProps}
            className="flex items-center justify-center gap-2 border-2 border-crema/70 text-crema hover:bg-blanco/10 hover:border-crema px-8 py-4 rounded-full text-base font-medium transition-all active:scale-[0.98]"
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
        style={{ opacity: arrowOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-crema/60 hover:text-crema transition-colors z-10"
        aria-label="Bajar a la siguiente sección"
      >
        <ArrowDown size={28} className="animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
