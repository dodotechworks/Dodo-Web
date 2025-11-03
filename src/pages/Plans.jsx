import { FastForward, FastForwardIcon } from 'lucide-react';
import React, { useEffect, useRef } from 'react'
import planbg from '../assets/videos/planbg.mp4'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Plans = () => {
  const planRef = useRef(null);
  const startRef = useRef(null);
  const growthRef = useRef(null);
  const proRef = useRef(null);

  useEffect(() => {
    gsap.from(planRef.current, {
      y: -200,
      ease: "power1.in",
      scrollTrigger: {
        trigger: planRef.current,
        start: "top bottom",
        end: "top center",
        scrub: 2,
        markers: false
      }
    }),
    gsap.from(startRef.current, {
      y: -200,
      opacity: 0,
      ease: "power1.in",
      scrollTrigger: {
        trigger: startRef.current,
        start: "top bottom",
        end: "top 40%",
        scrub: 2,
        markers: false
      }
    }),
    gsap.from(growthRef.current, {
      y: -200,
      opacity: 0,
      ease: "power1.in",
      scrollTrigger: {
        trigger: startRef.current,
        start: "top bottom",
        end: "top 40%",
        scrub: 2,
        markers: false
      }
    }),
    gsap.from(proRef.current, {
      y: -200,
      opacity: 0,
      ease: "power1.in",
      scrollTrigger: {
        trigger: startRef.current,
        start: "top bottom",
        end: "top 40%",
        scrub: 2,
        markers: false
      }
    })
  },[]);

  return (
    <div ref={planRef} className='relative w-full overflow-hidden'>
    <video
      className='absolute top-0 left-0 h-full w-full object-cover z-[-1]'
      src={planbg}
      autoPlay
      muted
      loop
      playsInline
    />
    <section className='flex flex-col h-full sm:h-full md:h-screen justify-center-safe my-20 sm:my-20 md:my-0 gap-8 mx-10 sm:mx-10 md:mx-20'>
     <div>
      <h1 className='uppercase text-black text-shadow-lg text-4xl sm:text-4xl md:text-5xl lato-black text-center'>Pricing Plans</h1>
     </div>
     <div className='flex flex-col sm:flex-col md:flex-row gap-8 justify-center items-center'>
     {/* Started Plan */}
      <div ref={startRef} className=' backdrop-blur-md bg-white/20 text-center border border-white/30 shadow-lg rounded-2xl p-6 w-fit h-fit flex flex-col gap-4'>
       <h1 className='text-black text-shadow-lg text-xl sm:text-xl md:text-2xl lato-bold'>Started Plan</h1>
       <h2 className='text-black text-shadow-lg text-base sm:text-base md:text-lg  lato-light'>Perfect for beginners or small shops.</h2>
       <ul className='text-black text-shadow-lg text-sm sm:text-sm md:text-lg dancing-script text-left flex flex-col gap-2'>
        <div className='flex gap-2'><FastForwardIcon className=''/><li>1 Website</li></div>
        <div className='flex gap-2'><FastForwardIcon /><li>Basic Booking System</li></div>
        <div className='flex gap-2'><FastForwardIcon /><li>8 Social Media Posts / month</li></div>
        <div className='flex gap-2'><FastForwardIcon /><li>Basic Business Analytics</li></div>        
       </ul>
       <h1 className='text-black text-xl sm:text-xl md:text-2xl lato-thin'>₹ 4,999/month</h1>
      </div>
     {/* Growth Plan */}
      <div ref={growthRef} className='backdrop-blur-md bg-white/20 text-center border border-white/30 shadow-lg rounded-2xl p-6 w-fit h-fit flex flex-col gap-4'>
       <h1 className='text-black text-shadow-lg text-xl sm:text-xl md:text-2xl lato-bold'>Growth Plan</h1>
       <h2 className='text-black text-shadow-lg text-base sm:text-base md:text-lg  lato-light'>For expanding businesses.</h2>
       <ul className='text-black text-shadow-lg text-sm sm:text-sm md:text-lg dancing-script text-left flex flex-col gap-2'>
        <div className='flex gap-2'><FastForwardIcon className=''/><li>Advanced Website + Dashboard</li></div>
        <div className='flex gap-2'><FastForwardIcon /><li>Smart Booking & Chat System</li></div>
        <div className='flex gap-2'><FastForwardIcon /><li>15 Social Media Posts / month</li></div>
        <div className='flex gap-2'><FastForwardIcon /><li>AI Business Insights</li></div>        
       </ul>
       <h1 className='text-black text-shadow-lg text-xl sm:text-xl md:text-2xl lato-thin'>₹ 9,999/month</h1>
      </div>
     {/* Pro Plan */}
      <div ref={proRef} className='backdrop-blur-md bg-white/20 text-center border border-white/30 shadow-lg rounded-2xl p-6 w-fit h-fit flex flex-col gap-4'>
       <h1 className='text-black text-shadow-lg text-xl sm:text-xl md:text-2xl lato-bold'>Pro Plan</h1>
       <h2 className='text-black text-shadow-lg text-base sm:text-base md:text-lg  lato-light'>For serious business owners.</h2>
       <ul className='text-black text-shadow-lg text-sm sm:text-sm md:text-lg dancing-script text-left flex flex-col gap-2'>
        <div className='flex gap-2'><FastForwardIcon className=''/><li className=''>Full Business Suite - Website + App + Dashboard</li></div>
        <div className='flex gap-2'><FastForwardIcon /><li>AI Predictive Analytics</li></div>
        <div className='flex gap-2'><FastForwardIcon /><li>30 Social Media Posts / month - Daily</li></div>
        <div className='flex gap-2'><FastForwardIcon /><li>Dedicated Support & Marketing Strategy</li></div>        
       </ul>
       <h1 className='text-black text-shadow-lg text-xl sm:text-xl md:text-2xl lato-thin'>₹ 14,999/month</h1>
      </div>
     </div>
    </section>
    </div>
  )
}

export default Plans;