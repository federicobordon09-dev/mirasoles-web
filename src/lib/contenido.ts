export const RESTAURANTE = {
  name: "Mirasoles",
  tagline: "Disfrutá una experiencia gastronómica en La Consulta",
  direccion: "Ejército de los Andes 42, M5567 La Consulta, Mendoza",
  telefono: "+54 2622 40-8799",
  whatsapp: "https://api.whatsapp.com/send/?phone=2622408799",
  whatsappNumber: "+54 2622 40-8799",
  instagram: "https://www.instagram.com/mirasoles.ok/",
  googleMaps: "https://maps.app.goo.gl/7yfVLoLhUuCiqA496",
};

export const SEO = {
  title: "Mirasoles | Restaurante en La Consulta Mendoza",
  description:
    "Disfrutá una excelente experiencia gastronómica en Mirasoles. Encontranos en La Consulta, Mendoza. Reservá fácilmente por WhatsApp.",
  keywords: [
    "restaurante",
    "La Consulta",
    "Mendoza",
    "comida",
    "almuerzo",
    "cena",
    "restaurante en La Consulta",
    "comer en Mendoza",
  ],
  openGraph: {
    title: "Mirasoles | Restaurante en La Consulta Mendoza",
    description:
      "Disfrutá una excelente experiencia gastronómica en Mirasoles. Encontranos en La Consulta, Mendoza.",
    locale: "es_AR" as const,
    type: "website" as const,
    siteName: "Mirasoles",
  },
};

export const HERO = {
  headline: "Mirasoles",
  subheadline: "Disfrutá de una experiencia gastronómica en La Consulta.",
  cta_primary: "Reservar por WhatsApp",
  cta_secondary: "Cómo llegar",
};

export const NOSOTROS = {
  eyebrow: "Quiénes somos",
  title: "Sobre Nosotros",
  paragraphs: [
    "En Mirasoles cada plato cuenta una historia. Somos un restaurante familiar ubicado en el corazón de La Consulta, Mendoza, donde la tradición y el buen comer se encuentran desde hace años.",
    "Trabajamos con productos frescos de la región. Nuestras salsas son caseras, las carnes se cocinan a la parrilla y los vinos son de bodegas locales que representan lo mejor de nuestra tierra.",
    "Queremos que te sientas como en casa. Un espacio cálido, atención cercana y el mejor sazón mendocino te esperan. Vení con tu familia o tus amigos — acá siempre hay un plato listo para vos.",
  ],
  values: [
    {
      icon: "UtensilsCrossed",
      title: "Comida casera",
      description:
        "Cocinamos con recetas tradicionales y productos frescos de la región.",
    },
    {
      icon: "Heart",
      title: "Atención cercana",
      description:
        "Te recibimos como parte de la familia, con una sonrisa y la mejor predisposición.",
    },
    {
      icon: "Home",
      title: "Ambiente familiar",
      description:
        "Un espacio pensado para compartir, desde almuerzos tranquilos hasta cenas especiales.",
    },
  ],
};

export const MENU_SECTION = {
  title: "Nuestro Menú",
  subtitle: "Explorá nuestras opciones",
  items: [
    {
      label: "Carta de comidas",
      image: "/menu-comida.png",
      caption: "Pizzas, lomos, sánguches, papas fritas, postres",
    },
    {
      label: "Carta de bebidas",
      image: "/menu-bebidas.png",
      caption: "Sin alcohol, cervezas, tragos, promos, vinos",
    },
  ],
};

export const GALERIA = {
  title: "Galería",
  subtitle: "Conocé nuestro espacio y platos",
  media: [
    { type: "image" as const, src: "/01.jpg", alt: "Frente del restaurante" },
    { type: "image" as const, src: "/02.jpg", alt: "Interior del restaurante" },
    { type: "image" as const, src: "/03.jpg", alt: "Plato de comida" },
    { type: "image" as const, src: "/04.jpg", alt: "Vista del salón" },
    { type: "image" as const, src: "/05.jpg", alt: "Ambiente del restaurante" },
    { type: "video" as const, src: "/video_01.mp4", alt: "Video del espacio" },
  ],
};

export const UBICACION = {
  title: "¿Cómo llegamos?",
  direccion: "Ejército de los Andes 42, M5567 La Consulta, Mendoza",
  embedUrl:
    "https://maps.google.com/maps?q=-33.7349594,-69.1219835&output=embed",
  cta: "Abrir en Google Maps",
};

export const CONTACTO = {
  title: "Contacto",
  subtitle:
    "Estamos para ayudarte. Comunicate con nosotros por cualquiera de estos canales.",
  channels: [
    {
      label: "WhatsApp",
      value: RESTAURANTE.whatsappNumber,
      href: RESTAURANTE.whatsapp,
      icon: "whatsapp",
    },
    {
      label: "Instagram",
      value: "@mirasoles.ok",
      href: RESTAURANTE.instagram,
      icon: "instagram",
    },
    {
      label: "Dirección",
      value: RESTAURANTE.direccion,
      href: RESTAURANTE.googleMaps,
      icon: "map",
    },
  ],
};

export const FOOTER = {
  tagline:
    "Restaurante familiar en La Consulta, Mendoza. Comida casera con productos de la región.",
  copyright: `© ${new Date().getFullYear()} Mirasoles. Todos los derechos reservados.`,
  hecho: "Hecho con ♥ en La Consulta, Mendoza",
  navLinks: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Menú", href: "#menu" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export const FLOATING_WHATSAPP = {
  label: "Reservar por WhatsApp",
};
