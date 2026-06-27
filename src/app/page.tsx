import Header from "@/components/header";
import Hero from "@/components/hero";
import Nosotros from "@/components/nosotros";
import Menu from "@/components/menu";
import Galeria from "@/components/galeria";
import Ubicacion from "@/components/ubicacion";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Menu />
        <Galeria />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
