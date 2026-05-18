import HeroCarousel from '@/components/HeroCarousel';
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

    </main>
  )
}

export default page