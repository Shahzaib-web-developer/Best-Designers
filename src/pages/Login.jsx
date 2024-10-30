import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 
   
  const handlelogin = ()=>{
    setState(!state)
  }

  const onSubmitHandle = ()=>{
     e.preventDefault()
  }

  return (
    <div>

    {
      state ?<div className='flex justify-center items-center bg-gray-100 h-[90vh]'>
      <div className='border border-gray-300 py-8 px-6 rounded-xl z-40 bg-white  '> 
      <p className='text-xl text-gray-700 font-medium mb-2'>Create Account</p>
      <p className='text-gray-500 text-sm mb-4'>Please sign up to book appointment</p>
      <form className='flex flex-col'>
          <label className='text-gray-600' >Full Name</label>
          <input className='border w-80 mb-4 h-10 outline-none px-2 text-gray-700 focus:bg-yellow-100' type="text"   onChange={(e)=> setName(e.target.value)} value= {name} placeholder='Enter name here'   />
          <label className='text-gray-600  ' >Email</label>
          <input className='border w-80 mb-4 h-10 outline-none px-2 text-gray-700 focus:bg-yellow-100' type="email"   onChange={(e)=> setEmail(e.target.value)} value= {email} placeholder='Enter email here' autoComplete='off' />
          <label className='text-gray-600 ' >Password</label>
          <input className='border w-80 mb-4 h-10 outline-none px-2 text-gray-700 focus:bg-yellow-100' type="password"   onChange={(e)=> setPassword(e.target.value)} value= {password} placeholder='Enter passwoed here'  />
          <button className='bg-blue-500 text-white border px-10 py-3 rounded-xl outline-none border-blue-500'>Create Account</button>
      </form>
      <div className='flex gap-2 mt-2'>
      <p className='text-gray-500 '>Already have an account? </p>
      <button onClick={handlelogin} className='text-blue-600'>Login</button>
      </div>
      </div>
    </div>
      : <div className='flex justify-center items-center bg-gray-100 h-[90vh]'>
      <div className='border border-gray-300 py-8 px-6 rounded-xl z-40 bg-white  '> 
      <p className='text-xl text-gray-700 font-medium mb-2'>Login</p>
      <p className='text-gray-500 text-sm mb-4'>Please log in to book appointment</p>
      <form className='flex flex-col'>
        
          <label className='text-gray-600  ' >Email</label>
          <input className='border w-80 mb-4 h-10 outline-none px-2 text-gray-700 focus:bg-yellow-100' type="email"   onChange={(e)=> setEmail(e.target.value)} value= {email} placeholder='Enter email here' autoComplete='off' />
          <label className='text-gray-600 ' >Password</label>
          <input className='border w-80 mb-4 h-10 outline-none px-2 text-gray-700 focus:bg-yellow-100' type="password"   onChange={(e)=> setPassword(e.target.value)} value= {password} placeholder='Enter passwoed here' />
          <button className='bg-blue-500 text-white border px-10 py-3 rounded-xl outline-none border-blue-500'>Login</button>
      </form>
      <div className='flex gap-2 mt-2'>
      <p className='text-gray-500 '>Create a new account </p>
      <button onClick={handlelogin} className='text-blue-600'>Click here</button>
      </div>
      </div>
    </div>
      
    }

   
    </div>
  )
}

export default Login
