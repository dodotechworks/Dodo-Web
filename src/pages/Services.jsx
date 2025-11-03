import React, { useEffect, useRef } from 'react'
import web from '../assets/videos/web.mp4'
import { GamepadDirectional } from 'lucide-react'
import soft from '../assets/videos/soft.mp4'
import ai from '../assets/videos/ai.mp4'
import servicesbg from '../assets/videos/servicesbg.mp4'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  const headingRef = useRef(null);
  const webRef = useRef(null);
  const softRef = useRef(null);
  const aiRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      x: 500,
      ease: "power2.in",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top bottom",
        end: "top 80%",
        scrub: 2,
        markers: false
      }
    }),
    gsap.from(webRef.current, {
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: webRef.current,
        start: "top 80%",
        end: "top center",
        scrub: 2,
        markers: false
      }
    }),
    gsap.from(softRef.current, {
      x: 500,
      opacity: 0,
      scrollTrigger: {
        trigger: softRef.current,
        start: "top 80%",
        end: "top center",
        scrub: 2,
        markers: false
      }
    }),
    gsap.from(aiRef.current, {
      x: -500,
      opacity: 0,
      scrollTrigger: {
        trigger: aiRef.current,
        start: "top 80%",
        end: "top center",
        scrub: 2,
        markers: false
      }
    })
  },[])
  return (
    <div className='relative w-full overflow-hidden'>
    <video
      className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' 
      src={servicesbg}
      autoPlay
      loop
      playsInline
      muted
    />
    <section className='flex flex-col my-20 mx-10 sm:mx-10 md:mx-20 gap-8'>
     <h1 ref={headingRef} className='text-white text-4xl sm:text-4xl md:text-5xl lato-black uppercase'>Services</h1>
     <div className='flex flex-col gap-36'>
     {/* Website */}
      <div ref={webRef} className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8 items-center'>
       <div className='flex flex-col gap-4'>
        <h1 className='text-white text-3xl sm:text-3xl md:text-4xl lato-black'>Website Development</h1>
        <h1 className='text-white text-base sm:text-base md:text-xl lato-light-italic'>We build responsive, modern, and SEO-friendly websites that attract more customers.</h1>
        <h1 className='text-white text-xl sm:text-xl md:text-2xl lato-regular'>Your website will have:</h1>
        <ul className='text-white text-base sm:text-base md:text-xl dancing-script flex gap-4'>
         <li className='text-center border-r-2 border-l-2 border-white rounded-2xl p-4 opacity-50 flex items-center'>Smart booking systems</li>
         <li className='text-center border-r-2 border-l-2 border-white rounded-2xl p-2 opacity-50 flex items-center'>Customer-friendly design</li>
         <li className='text-center border-r-2 border-l-2 border-white rounded-2xl p-2 opacity-50 flex items-center'>Business info and contact options</li>
         <li className='text-center border-r-2 border-l-2 border-white rounded-2xl p-2 opacity-50 flex items-center'>Real-time updates</li>
        </ul>
       </div>
       <video
        className='w-110 h-80 object-cover rounded-4xl'
        src={web}
        autoPlay
        loop
        muted
        playsInline
        />
      </div>
     {/* Software */}
      <div ref={softRef} className='flex flex-col sm:flex-col md:flex-col lg:flex-row-reverse gap-8 items-center'>
       <div className='flex flex-col gap-4'>
        <h1 className='text-white text-3xl sm:text-3xl md:text-4xl lato-black'>Business Management Software</h1>
        <h1 className='text-white text-base sm:text-base md:text-xl lato-light-italic'>We build responsiv and modern website to manage everything in a single website.</h1>
        <h1 className='text-white text-xl sm:text-xl md:text-2xl lato-regular'>Handle everything from one dashboard:</h1>
        <ul className='text-white text-base sm:text-base md:text-xl dancing-script flex flex-col gap-8'>
          <div className='flex flex-row gap-4'>
            <li className='text-center border-r-2 border-l-2 border-white rounded-2xl p-4 opacity-50 flex items-center'>Manage bookings, schedules, and payments</li>
            <li className='text-center border-r-2 border-l-2 border-white rounded-2xl p-2 opacity-50 flex items-center'>Track customers & staff</li>
          </div>
          <div className='flex flex-row gap-4'>
            <li className='text-center border-r-2 border-l-2 border-white rounded-2xl p-2 opacity-50 flex items-center'>Chat system to connect with customers</li>
            <li className='text-center border-r-2 border-l-2 border-white rounded-2xl p-2 opacity-50 flex items-center'>AI-powered suggestions for improving business</li>
          </div>
        </ul>
       </div>
       <video
        className='w-110 h-80 object-cover rounded-4xl'
        src={soft}
        autoPlay
        loop
        muted
        playsInline
        />
      </div>
     {/* AI Software */}
      <div ref={aiRef} className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8 items-center'>
       <div className='flex flex-col gap-4'>
        <h1 className='text-white text-3xl sm:text-3xl md:text-4xl lato-black'>Business Analytics & AI Insights</h1>
        <h1 className='text-white text-base sm:text-base md:text-xl lato-light-italic'>Understand your business like never before.</h1>
        <h1 className='text-white text-xl sm:text-xl md:text-2xl lato-regular'>We provide:</h1>
        <ul className='text-white text-base sm:text-base md:text-xl dancing-script flex gap-4'>
         <li className='text-center border-r-2 border-l-2 border-white rounded-2xl p-4 opacity-50 flex items-center'>Sales growth predictions</li>
         <li className='text-center border-r-2 border-l-2 border-white rounded-2xl p-2 opacity-50 flex items-center'>Profit/loss analytics</li>
         <li className='text-center border-r-2 border-l-2 border-white rounded-2xl p-2 opacity-50 flex items-center'>AI-powered advice for better decisions</li>
        </ul>
       </div>
       <video
        className='w-110 h-80 object-cover rounded-4xl'
        src={ai}
        autoPlay
        loop
        muted
        playsInline
        />
      </div>
     </div>
    </section>
    </div>

  )
}

export default Services