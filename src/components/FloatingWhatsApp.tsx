"use client";

import { MessageCircle } from "lucide-react";
import { FLOATING_WHATSAPP, RESTAURANTE } from "@/lib/contenido";
import { externalLinkProps } from "@/lib/utils";

export default function FloatingWhatsApp() {
  return (
    <a
      href={RESTAURANTE.whatsapp}
      {...externalLinkProps}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-blanco rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-pulse-whatsapp"
      aria-label={FLOATING_WHATSAPP.label}
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}
