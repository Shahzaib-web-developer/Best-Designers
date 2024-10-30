import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets.js'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Nav = () => {


  const [visible, setVisible] = useState(false)
  const {showSearch, setShowSearch, getCartCount} = useContext(ShopContext)
  const navigate = useNavigate()

  const handleSearch = ()=>{
      setShowSearch(!showSearch)
  }
  return (
    <nav className='flex items-center justify-between py-5 font-medium'>
      
      <Link to={'/'}><img src={assets.logo} className='w-36' alt="" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
         <p>Home</p>
         <hr className='w-2/4 bg-black  h-[1.5px] border-none hidden' />
        </NavLink>
        <NavLink to={"/collection"} className="flex flex-col items-center gap-1">
         <p>Collection</p>
         <hr className='w-2/4 bg-black  h-[1.5px] border-none hidden' />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
         <p>About</p>
         <hr className='w-2/4 bg-black  h-[1.5px] border-none hidden' />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
         <p>Contact</p>
         <hr className='w-2/4 bg-black  h-[1.5px] border-none hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={handleSearch} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className="group relative">
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
            <div className='flex flex-col gap-2 justify-center items-center w-36 py-5 px-3 bg-slate-200 border rounded-sm text-gray-700'>
          <p className='cursor-pointer hover:text-black'> My Profile</p>
          <p className='cursor-pointer hover:text-black'> Orders</p>
          <p onClick={()=> navigate("/login")} className='cursor-pointer hover:text-black'> Login</p>
          <p className='cursor-pointer hover:text-black'> Logout</p>
            </div>
          </div>
        </div>
        <Link to={'/cart'} className="relative">
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
          <p className='absolute bg-black text-white aspect-square rounded-full top-[-5px] right-[-5px]  w-4 text-[8px] text-center leading-4'>{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(!visible)}  src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>



      <div  className={`flex flex-col gap-2  absolute top-20 bg-slate-300  m-auto overflow-hidden transition-all duration-300 ease-in-out  sm:hidden ${visible ? "w-[90vw]" : "w-0"} `}>
        <NavLink onClick={()=> setVisible(false)}  to={'/'} className='text-center'>Home</NavLink>
        <hr />
        <NavLink onClick={()=> setVisible(false)}  to={'/collection'}  className='text-center'>Collection</NavLink>
        <hr />
        <NavLink onClick={()=> setVisible(false)}  to={'/about'} className='text-center'>About</NavLink>
        <hr />
        <NavLink onClick={()=> setVisible(false)}  to={"/contact"} className='text-center'>Contact</NavLink>
      </div>

    </nav>
  )
}

export default Nav
