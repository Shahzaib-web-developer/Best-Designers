import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Items from './Items'
import Title from './Title'

const BestSeller = () => {

    const {products} = useContext(ShopContext)

    const[bestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        const seller = products.filter((item)=> (item.bestseller))
        setBestSeller(seller.slice(0,5))
    },[])

  return (
   <div className='my-8'>

    <div className='text-center my-8 text-3xl'>
    <Title text1={"BEST"}  text2={"SELLER"} />
    <p className='text-sm text-gray-500 sm:text-sm md:text-base lg:text-lg  '>We have the best collection in from all over the world. This is the latest product we have in our collection</p>
    </div>

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
    {  bestSeller.map((item, index)=>{
        return(
            <div key={index}>
            <Items
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </div>
          )
    })}
    </div>
   </div>
  )
}

export default BestSeller
