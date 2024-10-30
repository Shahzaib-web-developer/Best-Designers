import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search , setSearch , showSearch, setShowSearch} = useContext(ShopContext)
     

  
    const location = useLocation()

     

    return (
      location.pathname === "/collection"  && showSearch ? (
          <div className='border-t border-b border-gray-400 bg-gray-50'>
              <div className='flex items-center justify-center gap-10'>
                  <div className='flex items-center justify-between gap-10 bg-white border border-gray-500 px-5 w-1/2 py-1 rounded-full my-2'>
                      <input
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          type="search"
                          placeholder='Search here'
                          className='w-1/2 outline-none'
                      />
                      <img className='w-8' src={assets.search_icon}  alt="Search Icon" />
                  </div>
                  <img onClick={() => setShowSearch(false)} src={assets.cross_icon} alt="Close Icon" />
              </div>
          </div>
      ) : null
  );
}


export default SearchBar
