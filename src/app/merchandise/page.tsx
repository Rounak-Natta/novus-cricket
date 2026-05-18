import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import MerchandiseMarquee from "@/components/MerchandiseMarquee";
import MerchandiseProducts from "@/components/MerchandiseProducts";

const slides = [
  {
    image: "/bnsliders/1.avif",
    title: "WEAR THE PRIDE",
    subtitle: "Official NRP merchandise for true supporters.",
  },
  {
    image: "/bnsliders/2.avif",
    title: "BUILT FOR MATCHDAY",
    subtitle: "Premium jerseys crafted for passion and performance.",
  },
  {
    image: "/bnsliders/3.avif",
    title: "REPRESENT THE CLUB",
    subtitle: "Streetwear inspired by the energy of NRP Football Club.",
  },
  {
    image: "/bnsliders/4.avif",
    title: "STYLE MEETS LOYALTY",
    subtitle: "Exclusive fan collections designed for everyday champions.",
  },
  {
    image: "/bnsliders/5.avif",
    title: "OWN THE COLORS",
    subtitle: "Show your support with official NRP supporter gear.",
  },
];

export default function MerchandisePage() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <HeroCarousel
          slides={slides}
          interval={5000}
        />
      </section>

      {/* Marquee */}
      <section className="relative z-10">
        <MerchandiseMarquee />
      </section>

      {/* Products */}
      <section className="relative z-10">
        <MerchandiseProducts />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}