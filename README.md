# 🌿 Mirasoles — Landing Page

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radixui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> ⚠️ **Aviso:** Este proyecto NO es la página oficial de Mirasoles. Es un proyecto personal y de portafolio creado con fines educativos y de demostración. Busca replantear y mejorar la presencia digital del restaurante, replicando sus datos reales con una estética moderna y cálida.

---

## 📖 Sobre el proyecto

Landing page conceptual para **Mirasoles**, un restaurante familiar ubicado en La Consulta, Mendoza. El sitio fue diseñado con una estética **cálida y sofisticada**: paleta bordo y oliva, tipografía Display, animaciones sutiles con Framer Motion y una experiencia mobile-first optimizada para conversión por WhatsApp.

---

## ✨ Funcionalidades

### 🧭 Header
- Sticky con scroll-aware (oculta/muestra al scrollear)
- Menú hamburguesa en mobile con navegación suave
- CTA directo a WhatsApp

### 🏠 Hero
- Full-viewport con círculos concéntricos decorativos
- Logo ring animado
- Dos CTAS: ver menú y reservar por WhatsApp

### 👨‍🍳 Nosotros
- Layout two-column con texto institucional
- 3 value cards con íconos: calidad, tradición, calidez

### 🍽️ Menú
- Cards de comida y bebidas con imágenes
- **Lightbox** con zoom progresivo (25%–400%) usando Radix UI Dialog
- Navegación entre items

### 🖼️ Galería
- Carrusel horizontal con auto-advance
- Navegación por flechas y dots
- Pausa al hacer hover/touch

### 📍 Ubicación
- Mapa embebido de Google Maps con sandbox de seguridad

### 📞 Contacto
- 3 cards coloreadas: WhatsApp, Instagram, Dirección

### 📱 Floating WhatsApp
- Botón flotante con animación pulse
- Visible en toda la navegación

### 🔒 Seguridad
- Content-Security-Policy (CSP)
- HSTS y X-Frame-Options
- Iframe sandbox en mapa
- Anti-scraper en número de WhatsApp

### 🔍 SEO
- Metadata completa con Open Graph
- `sitemap.xml` y `robots.txt`
- **JSON-LD** con Schema.org Restaurant
- Fuentes optimizadas con `next/font`

---

## 🛠 Stack tecnológico

| Tecnología | Uso |
|---|---|
| **Next.js 16** | Framework con App Router + Turbopack |
| **TypeScript** | Tipado estricto |
| **Tailwind CSS v4** | Estilos utility-first con tokens personalizados |
| **Framer Motion** | Animaciones scroll-reveal y transiciones |
| **Lucide React** | Íconos SVG |
| **Radix UI Dialog** | Lightbox del menú |
| **next/font** | Google Fonts: Inter + Playfair Display |

---

## 📊 Datos reales incluidos

| Dato | Valor |
|---|---|
| **Dirección** | Ejército de los Andes 42, La Consulta, Mendoza |
| **Teléfono** | +54 2622 40-8799 |
| **WhatsApp** | Link directo de atención |
| **Instagram** | @mirasoles.ok |
| **Horarios** | Jueves a domingo 20:30hs |
| **Menú** | Carta de comidas y bebidas |

---

## 🏆 Créditos

- **Mirasoles** — Datos reales del restaurante (sin afiliación)
- Diseño web conceptual con estética cálida y moderna
- Creado como proyecto de portafolio y demostración técnica

---

<p align="center">
  <i>Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion</i>
</p>
