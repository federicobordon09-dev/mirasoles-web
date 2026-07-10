"use client";

import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  variant?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "light",
}: Props) {
  const isDark = variant === "dark";
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignCls} mb-12 md:mb-16`}>
      {eyebrow && (
        <Reveal>
          <span className="text-acento text-sm font-medium uppercase tracking-[0.2em] block mb-3">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`font-display text-4xl md:text-5xl font-bold tracking-tight ${
            isDark ? "text-blanco" : "text-bordo"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={`text-lg mt-4 max-w-xl ${
              isDark ? "text-crema/70" : "text-texto/70"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.15}>
        <div
          className={`w-16 h-1 bg-acento mt-5 rounded-full ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      </Reveal>
    </div>
  );
}
