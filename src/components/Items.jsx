import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const Items = ({id, name, description , price , image}) => {
    const {currency} = useContext(ShopContext)
  return (
    <Link  to={`/products/${id}`}>
      <div>
      <div className= 'overflow-hidden'>
        <img  className='hover:scale-110 transition ease-in-out 1s  ' src={image[0]} alt="" />
       </div>
        <p className='text-sm text-gray-500 sm:text-sm md:text-base overflow-hidden '>{name}</p>
        <p>{description}</p>
        <b className='text-gray-700' >{currency} {price} </b>
      </div>
    </Link>
  )
}

export default Items 
