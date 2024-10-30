import React from 'react'
import {assets} from '../assets/assets.js'
const Hero = () => {
  return (
    <div className='w-full flex flex-col gap-3 justify-between sm:flex-row border border-gray-200'>
        <div className='flex flex-col w-full items-center justify-center gap-3 sm:w-1/2 '>
            <div className='flex  gap-2 items-center justify-center '>
            <p className='w-8 sm:w-11 bg-black h-[2px]   '></p>
            <p className='font-medium text-sm md:text-base '>Best Seller</p>
            </div>
            <div className='text-3xl font-medium lg:text-5xl '>New Arrivals</div>
            <div className='flex  gap-2 items-center '>
            <p className='font-medium text-sm md:text-base '>Shop Now</p>
            <p className='w-8 sm:w-11 bg-black h-[1px]   '></p>
            </div>
        </div>
        
            <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
         
      
    </div>
  )
}

export default Hero
 
