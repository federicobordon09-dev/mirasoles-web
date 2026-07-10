"use client";

import { useCallback, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const MIN_SCALE = 1;
const MAX_SCALE = 5;

const clampScale = (s: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s));

type Transform = { scale: number; tx: number; ty: number };

type Props = {
  src: string;
};

export default function CartaViewer({ src }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [t, setT] = useState<Transform>({ scale: 1, tx: 0, ty: 0 });
  const [gesturing, setGesturing] = useState(false);

  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const lastPan = useRef<{ x: number; y: number } | null>(null);
  const pinchStart = useRef<{ dist: number; scale: number } | null>(null);

  const clampTranslate = useCallback((s: number, x: number, y: number) => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return { x, y };
    const cRect = container.getBoundingClientRect();
    const maxX = Math.max(0, (img.offsetWidth * s - cRect.width) / 2);
    const maxY = Math.max(0, (img.offsetHeight * s - cRect.height) / 2);
    return {
      x: Math.min(maxX, Math.max(-maxX, x)),
      y: Math.min(maxY, Math.max(-maxY, y)),
    };
  }, []);

  const applyScale = useCallback(
    (nextScale: number, centerX?: number, centerY?: number) => {
      setT((prev) => {
        const container = containerRef.current;
        if (!container) return prev;
        const cRect = container.getBoundingClientRect();
        const cx = cRect.left + cRect.width / 2;
        const cy = cRect.top + cRect.height / 2;
        const px = (centerX ?? cx) - cx;
        const py = (centerY ?? cy) - cy;
        const s = clampScale(nextScale);
        const f = s / prev.scale;
        const c = clampTranslate(s, px - f * (px - prev.tx), py - f * (py - prev.ty));
        return { scale: s, tx: c.x, ty: c.y };
      });
    },
    [clampTranslate],
  );

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    setGesturing(true);
    if (pointers.current.size === 1) {
      lastPan.current = { x: e.clientX, y: e.clientY };
    } else if (pointers.current.size === 2) {
      const pts = Array.from(pointers.current.values());
      pinchStart.current = {
        dist: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y),
        scale: t.scale,
      };
      lastPan.current = null;
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const pts = Array.from(pointers.current.values());

    if (pts.length >= 2 && pinchStart.current) {
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const midX = (pts[0].x + pts[1].x) / 2;
      const midY = (pts[0].y + pts[1].y) / 2;
      applyScale(
        (pinchStart.current.scale * dist) / (pinchStart.current.dist || 1),
        midX,
        midY,
      );
    } else if (pts.length === 1 && lastPan.current) {
      const dx = e.clientX - lastPan.current.x;
      const dy = e.clientY - lastPan.current.y;
      lastPan.current = { x: e.clientX, y: e.clientY };
      setT((prev) => {
        if (prev.scale <= 1) return prev;
        const c = clampTranslate(prev.scale, prev.tx + dx, prev.ty + dy);
        return { ...prev, tx: c.x, ty: c.y };
      });
    }
  };

  const endPointer = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinchStart.current = null;
    if (pointers.current.size === 1) {
      const pt = Array.from(pointers.current.values())[0];
      lastPan.current = { x: pt.x, y: pt.y };
    } else if (pointers.current.size === 0) {
      lastPan.current = null;
      setGesturing(false);
    }
  };

  const onDoubleClick = (e: React.MouseEvent) => {
    if (t.scale > 1) setT({ scale: 1, tx: 0, ty: 0 });
    else applyScale(2.5, e.clientX, e.clientY);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative flex-1 overflow-hidden flex items-center justify-center touch-none select-none"
        style={{ touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        onPointerLeave={endPointer}
        onDoubleClick={onDoubleClick}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt="Carta de Mirasoles"
          draggable={false}
          className="max-w-full max-h-full object-contain will-change-transform"
          style={{
            transform: `translate3d(${t.tx}px, ${t.ty}px, 0) scale(${t.scale})`,
            transformOrigin: "center center",
            transition: gesturing ? "none" : "transform 0.15s ease-out",
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-3 py-3 bg-black/60 shrink-0">
        <button
          onClick={() => applyScale(+(t.scale - 0.5).toFixed(2))}
          className="text-blanco hover:text-acento disabled:opacity-30 transition-colors p-3"
          aria-label="Alejar"
          disabled={t.scale <= MIN_SCALE}
        >
          <Minus size={22} aria-hidden="true" />
        </button>
        <span className="text-blanco text-sm font-medium w-14 text-center tabular-nums">
          {Math.round(t.scale * 100)}%
        </span>
        <button
          onClick={() => applyScale(+(t.scale + 0.5).toFixed(2))}
          className="text-blanco hover:text-acento disabled:opacity-30 transition-colors p-3"
          aria-label="Acercar"
          disabled={t.scale >= MAX_SCALE}
        >
          <Plus size={22} aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
