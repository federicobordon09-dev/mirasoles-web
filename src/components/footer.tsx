"use client";

import { Phone } from "lucide-react";
import { FOOTER, RESTAURANTE } from "@/lib/contenido";
import { scrollToSection, externalLinkProps } from "@/lib/utils";
import Image from "next/image";

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
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="bg-bordo-dark text-crema/80 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Logo de Mirasoles restaurante"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="font-display text-xl font-bold text-blanco">
                Mirasoles
              </span>
            </div>
            <p className="text-sm leading-relaxed text-crema/60">
              {FOOTER.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-bold text-blanco mb-4">
              Enlaces
            </h4>
            <ul className="space-y-3 text-sm">
              {FOOTER.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href.replace("#", ""))}
                    className="hover:text-acento transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-bold text-blanco mb-4">
              Seguinos
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={RESTAURANTE.whatsapp}
                {...externalLinkProps}
                className="flex items-center gap-2 hover:text-acento transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={14} aria-hidden="true" />
                {RESTAURANTE.whatsappNumber}
              </a>
              <a
                href={RESTAURANTE.instagram}
                {...externalLinkProps}
                className="flex items-center gap-2 hover:text-acento transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={14} />
                @mirasoles.ok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-crema/10 pt-8 mt-8 text-center text-sm text-crema/50">
          <p>{FOOTER.copyright}</p>
          <p className="mt-1">{FOOTER.hecho}</p>
        </div>
      </div>
    </footer>
  );
}
