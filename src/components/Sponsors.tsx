import Image from "next/image";

const sponsors: string[] = [
  "/sponsors/1.jpeg",
  "/sponsors/2.jpeg",
  "/sponsors/3.jpeg",
  "/sponsors/4.jpeg",
  "/sponsors/5.jpeg",
  "/sponsors/6.jpeg",
  "/sponsors/7.jpeg",
];

export default function Sponsors() {
  return (
    <section className="w-full mt-[50px] mb-[50px] px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-lg md:text-xl font-semibold mb-8">
          Our Sponsors
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {sponsors.map((logo, i) => (
            <div
              key={i}
              className="relative w-24 h-12 md:w-32 md:h-16 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Sponsor ${i + 1}`}
                fill
                sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 128px"
                className="object-contain opacity-80 hover:opacity-100 transition duration-300"
                priority={i < 2} // only first 2 logos prioritized
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}