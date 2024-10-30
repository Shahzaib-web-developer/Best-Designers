import React from 'react'
import {assets} from "../assets/assets"
const About = () => {

  return (
    <div className='my-12'>
      <h1 className='uppercase text-gray-700 text-4xl font-medium text-center my-10 '>About <span className='text-black text-4xl font-bold'>Us</span></h1>
      <div className='flex flex-col-reverse lg:flex-row gap-10 '>
        
          <img className='md:w-[100%]  lg:w-80 lg:h-80 shrink-0 ' src={assets.about_img} alt="About" />
         
        <div>
          <p className='text-gray-500 py-2 lg:pb-4 '>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p className='text-gray-500 py-2 lg:pb-4'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-lg pb-10'>Our vision</b>
          <p className='text-gray-500 pt-2 lg:pt-4 '>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <p className='uppercase text-gray-900 text-2xl font-medium   my-10'>WHY CHOOSE <span className='text-gray-700'>US</span></p>
      <div className='flex flex-wrap sm:flex-nowrap mb-16'>
        <div className='border border-gray-300 py-20 px-2 md:px-10 flex-grow text-gray-600 hover:text-white hover:bg-blue-500 transition-all 0.5s'>
          <p className='pb-6 text-lg'>EFFICIENCY:</p>
          <p className=''>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border border-gray-300 py-20 px-2 md:px-10 flex-grow text-gray-600  hover:text-white hover:bg-blue-500 transition-all 0.5s'>
          <p className='pb-6 text-lg'>CONVENIENCE:</p>
          <p className=''>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border border-gray-300 py-20 px-2 md:px-10 flex-grow text-gray-600 hover:text-white hover:bg-blue-500 transition-all 0.5s'>
          <p className='pb-6 text-lg'>PERSONALIZATION:</p>
          <p className=''>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About

