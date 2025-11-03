import { Facebook, Instagram, Mail } from 'lucide-react'
import React from 'react'
import fiverr from '../assets/img/fiverr.svg'
import freelancer from '../assets/img/freelancer.svg'

const Footer = () => {
  return (
    <section className=''>
     <div className='bg-black h-60 text-white justify-center items-center flex flex-col gap-4'>
      <h1 className='text-md sm:text-md md:text-lg lato-light'>© 2025 DoDo. All Rights Reserved.</h1>
      <h1 className='text-sm sm:text-sm  md:text-base lato-black-italic'>Crafted with ❤️ by DoDo Team.</h1>
      <ul className='flex gap-8'>
       <li><a href='https://www.instagram.com/dodo.techs/'><Instagram width={30} height={30} className='hover:cursor-pointer' /></a></li>
       <li><a><Facebook width={30} height={30} className='hover:cursor-pointer'/></a></li>
       <li><a href='dodo.techworks@gmail.com'><Mail width={30} height={30} className='hover:cursor-pointer'/></a></li>
       <li><a href='https://www.fiverr.com/s/ljK8YlR'><img src={fiverr} className='w-8 hover:cursor-pointer'/></a></li>
       <li><a href='https://www.freelancer.com/u/dodotechworks?sb=t'><img src={freelancer} className='w-8 hover:cursor-pointer'/></a></li>
      </ul>
     </div>
    </section>
  )
}

export default Footer