import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, cartItem, currency, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (const items in cartItem) {
      for (const size in cartItem[items]) {
        if (cartItem[items][size] > 0) {
          tempData.push({
            _id: items,
            size: size,
            quantity: cartItem[items][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3 font-medium">
        <Title text1={"Your"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item) => {
          const productData = products.find((i) => i._id === item._id);
          if (!productData) return null; // Skip if no product data found
          
          return (
            <div key={`${item._id}-${item.size}`} className="border-t border-b py-4 flex flex-col gap-4 sm:flex-row justify-between items-center">
              <div className="flex items-start gap-4">
                <img className="w-16 sm:w-20" src={productData.image?.[0] || assets.fallback_image} alt={productData.name} />
                <div className="flex flex-col justify-center gap-4">
                  <p>{productData.name}</p>
                  <div className="flex gap-4">
                    <p>{currency}{productData.price}</p>
                    <p className="px-1 bg-gray-300 text-center">{item.size}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-7">
                <div>
                  <input 
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value > 0) updateQuantity(item._id, item.size, value);
                    }}
                    className="border w-14"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                </div>
                <div>
                  <img className="w-5" onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} alt="Delete" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full sm:w-[450px] flex justify-end">
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;

