import AboutCard from '@/components/AboutCard';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel'
import MerchandiseMarquee from '@/components/MerchandiseMarquee';
import SocialGallery from '@/components/SocialGallery';
import React from 'react'


const slides = [
  {
    image: "/bnsliders/abt1.png",
    title: "BUILT FOR MATCH DAY",
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
          <AboutCard/>
      </section>


      <section className="relative z-10">
          <SocialGallery/>
      </section>

      <Footer/>

    </main>
  )
}

export default page