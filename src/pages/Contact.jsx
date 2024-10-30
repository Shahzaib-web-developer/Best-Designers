import React from 'react'
import { assets } from '../assets/assets'
const Contact = () => {
  return (
    <div className='sm:mx-[25%] m-auto'>
        <h1 className='uppercase text-gray-700 text-3xl font-medium text-center my-10 '>Contact <span className='text-black text-3xl font-bold'>Us</span></h1>
      <div className='flex flex-col-reverse lg:flex-row gap-10 '>
        
          <img className='md:w-[100%]  lg:w-80 lg:h-80 shrink-0 ' src={assets.contact_img} alt="About" />
          <div>
            <p className='text-gray-700 text-lg font-medium mb-4'>Our Office</p>
            <p className='text-gray-500'>00000 Willms Station </p>
            <p className='text-gray-500'>Suite 000, Washington, USA</p>
            <li className='list-none mt-4 text-gray-500'>tel to:<a href="tel: 03042422121">000000000000</a></li>
            <li  className='list-none text-gray-500' >Email to:<a href="mailto: muhammadshahzaibitx@gmail.com">hospital@gmail.com</a></li>
            <p className="text-gray-700 text-lg text-medium mt-4">CAREERS AT PRESCRIPTO</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='mt-6 border border-black px-8 py-3 hover:bg-black hover:text-white'>Explore Job</button>
          </div>
      </div>    
    </div>
  )
}

export default Contact
