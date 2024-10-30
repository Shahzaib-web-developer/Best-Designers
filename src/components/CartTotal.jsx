import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {


    const { getCartAmount, delivery_fee } = useContext(ShopContext)
    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'Cart'} text2={'Total'}/> 
            </div>
            <div>
                <div className='flex justify-between'>
                    <p>SubTotal</p>
                    <p>$ {getCartAmount()}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping fee</p>
                    <p>$ {delivery_fee}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Total</p>
                    <p>{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</p>
                </div>
            </div>

        </div>
    )
}

export default CartTotal
