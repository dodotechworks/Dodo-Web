import React from 'react'
import { Bot, ChevronsUp, CircleCheckBig, Contact, HandCoins } from 'lucide-react'
import whybg from '../assets/videos/whybg.mp4'

const Why = () => {
  return (
    <div className='relative overflow-hidden'>
    <video 
      className='absolute w-full h-full object-cover z-[-1]'
      src={whybg}
      autoPlay
      loop
      muted
      playsInline
    />
    <section className='flex flex-col h-full sm:h-full md:h-screen justify-center my-20 sm:my-20 md:my-0 mx-10 sm:mx-10 md:mx-20'>
    <div className='flex flex-col sm:flex-col md:flex-row gap-18 justify-center'>
     <div>
      <div>
       <h1 className='text-white text-4xl sm:text-4xl md:text-5xl uppercase lato-black'>Connect with us</h1>
      </div>
      <form action="https://submit-form.com/teJ68sqsU" className='text-white flex flex-col mt-8 dancing-script-normal text-base sm:text-base md:text-xl'>
      <div className='flex items-center mb-6 gap-8'>
       <label className='w-30' for="name">Name</label>
       <input type="text" id="name" name="name" placeholder="Enter your name" required="" className='w-full border-4 border-white p-2 rounded-lg dancing-script-thin'/>
      </div>
      <div className='flex items-center mb-6 gap-8'>
       <label className='w-30' for="businessname">Business Name</label>
       <input type="text" id="businessname" name="businessname" placeholder="Enter your Business Name" required="" className='w-full border-4 border-white p-2 rounded-lg dancing-script-thin'/>
      </div>      
      <div className='flex items-center mb-6 gap-8'>
       <label className='w-30' for="email">Email</label>
       <input className='w-full border-4 border-white p-2 rounded-lg dancing-script-thin' type="email" id="email" name="email" placeholder="Enter your mail Id" required="" />
      </div>
      <div className='flex items-center mb-6 gap-8'>
       <label className='w-30' for="number">Contact Number</label>
       <input type="number" id="number" name="number" placeholder="Enter your Contact Number" required="" className='w-full border-4 border-white p-2 rounded-lg dancing-script-thin'/>
      </div>      
      <div className='flex items-center gap-8 mb-5'>
       <label className='w-30' for="message">Message</label>
       <textarea
         className='border-4 border-white p-2 rounded-lg  h-40 w-full dancing-script-thin'
         id="message"
         name="message"
         placeholder="Tell us about your business"
         required=""
       ></textarea>
      </div>
      <div className='flex justify-end'>
       <button className='text-black bg-white p-2 rounded-lg lato-black hover:cursor-pointer' type="submit">Submit</button>
      </div>
      </form>
     </div>  
     <div>
      <div>
       <h1 className='text-white text-4xl sm:text-4xl md:text-5xl uppercase lato-black'>Why Choose DoDo</h1>
      </div>
      <div className='mt-5 text-white text-base sm:text-base md:text2xl dancing-script-normal leading-30'>
       <div className='flex gap-4 items-center'><CircleCheckBig /> <h1>All-in-one digital growth system</h1></div>
       <div className='flex gap-4 items-center'><Bot /><h1>Smart AI built for real business growth</h1></div>
       <div className='flex gap-4 items-center'><Contact /><h1>24/7 client support</h1></div>
       <div className='flex gap-4 items-center'><HandCoins /><h1>100% custom-built for your business type</h1></div>
      </div>
     </div>   
    </div>
    </section>
    </div>
  )
}

export default Why