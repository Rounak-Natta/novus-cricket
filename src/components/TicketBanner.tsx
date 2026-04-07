import Image from "next/image";

const TicketBanner = () => {
  return (
    <section className="w-full flex justify-center px-4 md:px-6 lg:px-8 mt-[50px] mb-[50px]">
      <div className="w-full max-w-5xl">
        <div className="relative w-full aspect-[851/315] rounded-xl overflow-hidden">
          <Image
            src="/images/tktbanner.png"
            alt="Ticket Banner"
            fill
            priority
            className="object-contain sm:object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TicketBanner;