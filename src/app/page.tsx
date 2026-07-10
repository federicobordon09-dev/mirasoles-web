import Header from "@/components/header";
import Hero from "@/components/hero";
import Nosotros from "@/components/nosotros";
import Menu from "@/components/menu";
import Galeria from "@/components/galeria";
import Ubicacion from "@/components/ubicacion";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SectionDivider from "@/components/SectionDivider";

const CREMA = "#F4E7D3";
const BORDO = "#2A0809";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider bg={BORDO} fill={CREMA} />
        <Nosotros />
        <SectionDivider bg={CREMA} fill={BORDO} />
        <Menu />
        <SectionDivider bg={BORDO} fill={CREMA} />
        <Galeria />
        <SectionDivider bg={CREMA} fill={BORDO} />
        <Ubicacion />
        <SectionDivider bg={BORDO} fill={CREMA} />
        <Contacto />
        <SectionDivider bg={CREMA} fill={BORDO} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
