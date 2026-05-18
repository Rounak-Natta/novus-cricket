import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import MerchandiseMarquee from '@/components/MerchandiseMarquee';
import SponsorshipContact from '@/components/SponsorshipContact';
import React from 'react'

const slides = [
  {
    image: "/images/contact1.png",
    title: "CONTACT US",
    subtitle: "Premium jerseys crafted for passion and performance.",
  }
];

const page = () => {
  return (
    <main className='relative overflow-x-hidden'>
      <section className="relative overflow-x-hidden">
        <HeroCarousel
          slides={slides}
          interval={5000}/>
      </section>
      <section className="relative z-10">
                <MerchandiseMarquee />
            </section>
            <section className="relative z-10">
                      <SponsorshipContact/>
                  </section>

                  <Footer/>

    </main>
  )
}

export default page