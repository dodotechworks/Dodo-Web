import { HandCoins } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import about from '../assets/videos/about.mp4'
import aboutbg from '../assets/videos/aboutbg.mp4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 400,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top bottom",
        end: "top center",
        scrub: 2,
        markers: false
      }
    })
  },[])

  return (
      <div className='relative h-screen w-full overflow-hidden'>
        <video 
          className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
          src={aboutbg}
          playsInline
          autoPlay
          muted
          loop
        />
      <section ref={headingRef} className='flex flex-col h-screen justify-center-safe mx-10 sm:mx-10 md:mx-20 gap-8 overflow-hidden'>
      <h1 className='text-white text-4xl md:text-5xl uppercase text-center lato-black'>Who We Are</h1>
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4 sm:gap-8 md:gap-8 lg:gap-4 items-center'>
        <video
        className='w-[600px] h-fit rounded-4xl opacity-90 p-4' 
        src={about}
        autoPlay
        loop
        muted
        playsInline
        />
        <p className='text-white text-sm sm:text-sm md:text-lg lg:text-lg text-center leading-loose dancing-script'>At DoDo, we help small and medium businesses grow using digital technology.
        From creating stunning websites to building intelligent business management systems and running powerful social media campaigns — we handle everything to make your brand visible, smart, and profitable.
        </p>
      </div>
      <h1 className='text-white lato-light text-2xl sm:text-2xl md:text-3xl text-left mt-5'>Our mission is simple: Make your business digital, data-driven, and ready for tomorrow.</h1>
      </section>
      </div>
  )
}

export default About