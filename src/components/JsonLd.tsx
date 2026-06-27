export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Mirasoles",
    image: "https://mirasoles.vercel.app/og-image.jpg",
    "@id": "https://mirasoles.vercel.app",
    url: "https://mirasoles.vercel.app",
    telephone: "+542622408799",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ejército de los Andes 42",
      addressLocality: "La Consulta",
      addressRegion: "Mendoza",
      postalCode: "M5567",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.7349594,
      longitude: -69.1219835,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday"],
        opens: "20:30",
        closes: "23:59",
      },
    ],
    servesCuisine: ["Pizza", "Argentina", "Parrilla"],
    priceRange: "$$",
    sameAs: ["https://www.instagram.com/mirasoles.ok/"],
    hasMap:
      "https://maps.app.goo.gl/7yfVLoLhUuCiqA496",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
