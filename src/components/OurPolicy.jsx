import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around justify-center text-center my-20 gap-5'>

        <div className='flex items-center flex-col gap-2'>
            <img className='w-12' src={assets.exchange_icon} alt="" />
            <p>Easy to Exchange</p>
            <p className='text-gray-500'>We offer you easy to use and understand the exchange</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <img className='w-12' src={assets.quality_icon} alt="" />
            <p>7 days return policy</p>
            <p className='text-gray-500'>We offer you free return policy</p>
        </div>
        <div className='flex items-center flex-col gap-2'>
            <img className='w-12' src={assets.support_img} alt="" />
            <p>Customer Support</p>
            <p className='text-gray-500'>We offer you best customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy
