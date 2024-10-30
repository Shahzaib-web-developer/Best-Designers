import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Products = () => {
  const { id } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState("");
  const [image, setImage] = useState("");
  const [size, setSize] = useState("")

  const fetchData = async () => {
    const product = products.find((item) => item._id === id);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
     
    }
  };


  useEffect(() => {
    fetchData();
  }, [products, id]);

  if (!productData) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className='border-t-2 pt-12 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product item */}
      <div className='flex flex-col gap-12 sm:flex-row'>
        {/* profuct Images */}
        <div className='flex flex-col-reverse gap-12 sm:flex-row'>
          <div className='flex gap-1 sm:flex-col sm:overflow-x-auto h-auto justify-between sm:justify-normal  sm:w-[19%] w-full '>
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt= ""
                onClick={()=>setImage(item)}
                className={`w-full ${image===item ? "border border-gray-400" : ""}`}
              />
            ))}
          </div>
          <div className='w-full h-auto sm:w-[80%] '>
            <img src={image} alt="Selected product" className='w-full h-auto' />
          </div>
        </div>
        {/* product info */}
        <div className='flex-1'>
          <h2 className='mb-4 text-2xl font-medium'>{productData.name}</h2>
          <div className="flex gap-2 mb-5">
          <img src={assets.star_icon} alt="" className="w-5" />
          <img src={assets.star_icon} alt="" className="w-5" />
          <img src={assets.star_icon} alt="" className="w-5" />
          <img src={assets.star_icon} alt="" className="w-5" />
          <img src={assets.star_dull_icon} alt="" className="w-5" />
          <p>(122)</p>
          </div>
          <p className='mb-4 font-medium text-2xl'>{currency}{productData.price}</p>
          <div className='text-gray-400 sm:min-w-64 mb-4'>{productData.description}</div>
          <div className='my-3 text-2xl'> Select Size</div>
          <div className='flex gap-3'>
            {
              productData.sizes.map((item, index)=>(
                <button onClick={()=>setSize(item)} className={`border mb-5 px-2 py-2 bg-gray-100 w-10 ${size===item ? "bg-red border-red-500" :""}`} key={index} >{item}</button>
              ))
            }
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className='bg-black text-white px-5 py-3 active:bg-gray-700 rounded-sm '>ADD TO CART</button>
          <hr className='mt-8 '/>
          <div className="flex flex-col mt-8"> 
            <p className='text-sm text-gray-400 '>100% original product</p>
            <p className='text-sm text-gray-400 '>Cash on delivery availiable for this product</p>
            <p className='text-sm text-gray-400 '>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className='flex mt-12'>
        <b className='px-3 py-2 border'>Description</b>
        <p className='px-3 py-2 border'>Review (122)</p>
      </div>
      <div className="p-6 border mt-10">
        <p className='text-gray-400 text-sm'>Welcome to our e-commerce store, where quality meets style. We offer the finest selection of clothing, crafted with care and attention to detail. Whether you're looking for trendy fashion pieces or timeless classics, our collection is designed to elevate your wardrobe. Shop with confidence, knowing that every item is made from the best materials to ensure both comfort and durability. Discover your new favorite outfit today!</p>
        <br />
        <p className='text-gray-400 text-sm'>I’m amazed by the quality of the clothes! Every piece I’ve bought feels luxurious and fits perfectly</p>
      </div>

      <div>
            <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  );
};

export default Products;
