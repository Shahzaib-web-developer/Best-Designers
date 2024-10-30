import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import Items from '../components/Items'


const RelatedProduct = ({category, subCategory}) => {
  const {products} = useContext(ShopContext)
  const [related , setRelated] = useState([])

  useEffect(()=>{
    // let productCopy = products.slice()
    if (products.length > 0) {
      products.filter((item)=>category === item.category)
      products.filter((item)=>subCategory === item.subCategory)
      setRelated(products.slice(0, 5))
    }
  },[products])

  return (
    <div className='my-8'>
    <div className='text-center py-8 text-3xl'>
      <Title text1={"Related"}  text2={"Products"}/>
      <p className='text-sm text-gray-500 sm:text-sm md:text-base lg:text-lg  '>We have the best collection in from all over the world. This is the related product we have in our collection</p>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
      {related.map((item, index) => (
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

export default RelatedProduct
