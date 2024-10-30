import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Items from './Items'

const LatestCollection = () => {

    const {products} = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(()=>{
      setLatestProducts(products.slice(0, 10))
    },[])
    
  return (
    <div className='my-8'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"Latest "}  text2={"Collection"}/>
        <p className='text-sm text-gray-500 sm:text-sm md:text-base lg:text-lg  '>We have the best collection in from all over the world. This is the latest product we have in our collection</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
        {latestProducts.map((item, index) => (
          <Items
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
