import React, { useCallback, useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import Items from '../components/Items'
// import { useSearchParams } from 'react-router-dom'

const Collection = () => {

  const { products,  search, setSearch, showSearch } = useContext(ShopContext)
  const [filterProduct, setFilterProduct] = useState([])
  const [dropDown, setDropDown] = useState(false )
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sort, setSort] = useState("relevent")



  const handleCategory = (e)=>{
    e.target.value
    if (category.includes(e.target.value)) {
      setCategory(prev=>(prev.filter((item)=>item !== e.target.value)))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    } 
  }
 
  const handleSubCategory = (e)=>{
    e.target.value
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=>(prev.filter((item)=>item !== e.target.value)))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    } 
  }



useEffect(()=>{
  let filteredProducts = products.filter((product)=>{
    return (
      (category.length === 0 || category.includes(product.category))&&
      (subCategory.length === 0 || subCategory.includes(product.subCategory))
    )
  })

  switch (sort) {
    case "Low-High":
      filteredProducts.sort((a, b)=> a.price - b.price)
      break;
    case "High-low":
      filteredProducts.sort((a, b)=> b.price - a.price)  
      break;
      case "A-Z":
        filteredProducts.sort((a, b)=> a.name.localeCompare(b.name))
        break;
      case "Z-A":
        filteredProducts.sort((a, b)=> b.name.localeCompare(a.name))  
        break;  
    default:
      break;
  }
 // Apply search filter
 if (search && showSearch) {
  filteredProducts = filteredProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
}
 
    setFilterProduct(filteredProducts)
  },[category, subCategory, products, sort, search , showSearch])

  

  const handleDropDown = ()=>{
    setDropDown(!dropDown)
  }

  return (
    <div className='flex justify-start gap-10 flex-col sm:flex-row'>
      {/* left side for filter */}
      <div className='min-w-60 w-60 sm:sticky sm:top-0 sm:h-screen '>
        <p  onClick={handleDropDown}  className='font-medium text-2xl my-3 flex items-center gap-3 '>Filter
          <img className={`h-3 sm:hidden ${dropDown ? "rotate-90" : ""} `} src={assets.dropdown_icon} alt="" />
        </p>
        <div className={`border border-gray-300 p-4 ${dropDown ? "" : "hidden"} sm:block`} >
          <div className='my-3'>
            <div className='font-medium text-xl my-3 mb-3 ' >Category</div>
            <div className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Men"} onChange={handleCategory} />Men
            </div>
            <div className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Women"} onChange={handleCategory} />Women
            </div>
            <div className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={handleCategory} />Kids
            </div>
          </div>
          <hr />

          <div className='my-3'>
            <div className='font-medium text-xl my-3 mb-3 '>Type</div>
            <div className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Topwear"} onChange={handleSubCategory} />Topwear
            </div>
            <div className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Bottomwear"} onChange={handleSubCategory} />Bottomwear
            </div>
            <div className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={handleSubCategory} />Winterwear
            </div>
          </div>
        </div>
      </div>

      {/* Right side for product */}
      <div>
        <div className='flex flex-col-reverse md:flex-row md:justify-between items-start md:gap-10'>
          <div className='text-center text-nowrap md:py-8 text-xl md:text-3xl'>
            <Title text1={"All"} text2={"Collection"} />
          </div>

          <div className='my-5'>
            <select 
              className='border border-gray-400 bg-white ' 
              value={sort}
              onChange={(e)=>setSort(e.target.value)}
            >
              <option value="Relevent">Relevent</option>
              <option value="High-low">High to Low</option>
              <option value="Low-High">Low to High</option>
              <option value="A-Z">Alphabetically: A-Z</option>
              <option value="Z-A">Alphabetically: Z-A</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            filterProduct.map((item, index)=>{
              return(
                <Items
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
              )
            })
          } 
        </div>
      </div>
    </div>
   
  )
}

export default Collection
