import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col gap-10 sm:flex-row flex-wrap justify-between text-sm  mt-40 mb-10'>
        <div>
            <img src={assets.logo} className=' w-32 mb-5' alt="" />    
            <p className='max-w-80 text-gray-500'>This is the one of the best website where your choose the best of the clothes you want this is easy to use and we have different type of clothes pant shirt and different variety with 20% discount on it. </p>
        </div> 
        <div>
        <p className='font-medium text-3xl mb-5'>Company</p>
        <ul className='text-gray-500 flex flex-col gap-1 cursor-pointer '>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>    
        </ul>      
        </div>    
        <div>
        <p className='text-2xl font-medium mb-5'>Get in touch</p>
        <ul className='text-gray-500 flex flex-col gap-2 cursor-pointer '>
            <li>+21-123-123</li>
            <li>Contactshah@gmail.com</li>  
        </ul>    
        </div>
      </div>
      <div>
        <hr />
        <p className='text-center text-sm py-3'>Copyright2024 @ Forever - All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
