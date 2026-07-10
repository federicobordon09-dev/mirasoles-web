"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { RESTAURANTE, FOOTER } from "@/lib/contenido";
import { scrollToSection, externalLinkProps } from "@/lib/utils";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bordo-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <motion.a
          href="/"
          onClick={(e) => handleNav(e, "inicio")}
          className="flex items-center gap-3"
          aria-label="Ir al inicio"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/logo.png"
            alt="Logo de Mirasoles restaurante"
            width={40}
            height={40}
            className="rounded-full ring-1 ring-acento/40"
          />
          <span className="font-display text-xl md:text-2xl font-bold text-blanco">
            Mirasoles
          </span>
        </motion.a>

        <motion.nav
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {FOOTER.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href.replace("#", ""))}
              className="relative text-sm font-medium text-blanco/90 hover:text-acento transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-acento after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESTAURANTE.whatsapp}
            {...externalLinkProps}
            className="shine flex items-center gap-2 bg-oliva hover:bg-oliva/90 text-blanco px-4 py-2 rounded-full text-sm font-semibold transition-colors active:scale-[0.97]"
            aria-label="Reservar por WhatsApp"
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>Reservar</span>
          </a>
        </motion.nav>

        <button
          className="md:hidden text-blanco transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-bordo-dark border-t border-bordo/50 px-4 py-6 flex flex-col gap-4">
          {FOOTER.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href.replace("#", ""))}
              className="text-blanco/90 text-lg font-medium hover:text-acento transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESTAURANTE.whatsapp}
            {...externalLinkProps}
            className="flex items-center justify-center gap-2 bg-oliva text-blanco px-4 py-3 rounded-full text-base font-semibold mt-2"
            aria-label="Reservar por WhatsApp"
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span>Reservar por WhatsApp</span>
          </a>
        </nav>
      )}
    </header>
  );
}
