import React from 'react'

const NewsLetterBox = () => {


    const handleSubmit  = (e)=>{
        e.preventDefault()
    }
  return (
    <div className='flex flex-col items-center gap-3  my-20'>
      <p className='text-3xl font-medium mb-3'>Subscribe now & get 20% discount</p>
      <p className='text-gray-500'>Please enter your email for the verification</p>

      <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex justify-between border rounded-md'>
        <input className='outline-none ms-10' type="email" placeholder='Enter your Email' required />
        <button type='submit' className='py-3 bg-black text-white outline-none sm:p-3 '> Subscribe</button>
      </form>

    </div>
  )
}

export default NewsLetterBox
