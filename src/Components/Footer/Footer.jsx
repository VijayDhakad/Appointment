import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-4 text-sm '>
        {/* ===========left sector
         */}
         <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p  className='w-full md:w-2/3 text-gray-600 leading-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vero cum. Illum necessitatibus ex ullam enim quas magni! Alias voluptatibus mollitia quod commodi, aut recusandae laboriosam autem non rem facilis.</p>
         </div>
         {/* =========center secton */}
         <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>ABout us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
         </div>
         {/* =========right section */}
         <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul  className='flex flex-col gap-2 text-gray-600'>
          <li>+91 8462052684</li>
          <li>dhakadvijay2684@gmail.com</li>
          </ul>
        
         </div>
      </div>
      {/* copy right text */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto -All Right Reserved</p>
      </div>
      
    </div>
  )
}

export default Footer
