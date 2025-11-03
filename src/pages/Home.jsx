import React, {useEffect, useRef, useState } from 'react'
import { Brain, ChartNoAxesColumnIncreasing, Globe, Handshake } from 'lucide-react'
import homebg from '../assets/videos/homebg.mp4'
import Checkbox from '../components/Checkbox'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Home = ({ menuOpen, setMenuOpen, handleScroll, refs }) => {

  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const subheadingRef = useRef(null)

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      x: 200,
      duration: 1,
      ease: "power3.in"
    }),
    gsap.from(subtitleRef.current, {
      opacity: 0,
      scale: 0.5,
      delay: 1,
      ease: "power2.in"
    }),
    gsap.from(subheadingRef.current, {
      opacity: 0,
      y: 200,
      delay: 1.5,
      ease: "power3.in"
    })
  },[])

  return (
    <section ref={refs.homeRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 right-0 md:left-100 w-full h-full z-0"
        src={homebg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center">
          <h1 className="text-white lato-bold text-4xl sm:text-4xl md:text-5xl mt-20 mx-10 sm:mx-10 md:mx-20">DODO</h1>
          {/* Checkbox always visible on top of everything */}
          <div className="fixed top-20 right-5 sm:right-5 md:right-20 z-30">
            <Checkbox 
              isChecked={menuOpen}          // ✅ Pass current state
              onToggle={(val) => setMenuOpen(val)} 
            />
          </div>
        </nav>

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-black opacity-98 backdrop-blur-md transition-transform duration-500 z-20 p-6 
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="flex flex-col gap-14 mt-32 text-white text-4xl lato-black uppercase">
            <li
              onClick={() => {
                handleScroll(refs.homeRef)
                setMenuOpen(false)
              }}
              className="hover:text-blue-500 cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => {
                handleScroll(refs.aboutRef)
                setMenuOpen(false)
              }}
              className="hover:text-blue-500 cursor-pointer"
            >
              About
            </li>

            <li
              onClick={() => {
                handleScroll(refs.servicesRef)
                setMenuOpen(false)
              }}
              className="hover:text-blue-500 cursor-pointer"
            >
              Services
            </li>

            <li
              onClick={() => {
                handleScroll(refs.plansRef)
                setMenuOpen(false)
              }}
              className="hover:text-blue-500 cursor-pointer"
            >
              Plans
            </li>

            <li
              onClick={() => {
                handleScroll(refs.contactRef)
                setMenuOpen(false)
              }}
              className="hover:text-blue-500 cursor-pointer"
            >
              Contact
            </li>
          </ul>


        </div>

        {/* Hero Section */}
        <div className="flex flex-col mx-10 sm:mx-10 md:mx-20 mt-25 sm:mt-25 md:mt-30 gap-6 sm:gap-6 md:gap-14">
          <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl text-white lato-black uppercase">
            Grow your business with Dodo
          </h1>

          <div ref={subtitleRef} className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <h2 className="lato-light-italic text-white text-xl">Website</h2>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="lato-light-italic text-white text-xl">
                AI-Powered Business Tools
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="lato-light-italic text-white text-xl">
                Social Media Marketing
              </h2>
            </div>
          </div>
        </div>

        <div ref={subheadingRef} className="flex flex-col sm:flex-col md:flex-row items-center mt-5 sm:mt-5 md:mt-15 mx-10 sm:mx-10 md:mx-20 gap-8">
          <h1 className="text-white lato-regular text-2xl sm:text-2xl md:text-3xl">
            Everything you need to take your business to the next level
          </h1>
          <div className="flex gap-4">
            <h1 onClick={() => {handleScroll(refs.contactRef)
            setMenuOpen(false)}} className="text-black text-xl bg-white rounded-lg p-2 dancing-script opacity-50 hover:opacity-100 hover:cursor-pointer">
              Get Started
            </h1>
            <h1 onClick={() => {handleScroll(refs.plansRef)
            setMenuOpen(false)}} className="text-black text-xl bg-white rounded-lg p-2 dancing-script opacity-50 hover:opacity-100 hover:cursor-pointer">
              See Plans
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
