import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItemComponent from '../components/CartItemComponent';
import Country from '../constants/country'

function CartPage() {
  const {cart,totalPrice} = useSelector(state=>state.cartStore)
  const[currentCoupon,setCurrentCoupon] = useState(null)

  const coupon = useRef()

  function handleCoupon(){
    setCurrentCoupon(coupon.current.value)
    //reset input
    coupon.current.value=''
  }
  
  return (
    <div className='px-2'>
     <div className='mt-[20px] lg:mt-[50px]'>
        <div className="container mx-auto flex  flex-col lg:flex-row justify-between">
          {/* left side */}
          <div className='w-[full] lg:w-[75%]'>
            <div className='grid grid-cols-4 bg-lightBlue h-[60px] place-items-center'>
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            {/* body content */}
            <div>
              {cart.length>0?cart.map((item,i)=>{
                return <CartItemComponent key={i} index={i} item={item} />
              }):<p className='text-center text-2xl font-bold mt-12'>Cart is empty</p>}
            </div>
          </div>
          {/* Right side */}
          <div className=' flex flex-col'>
             <div className='bg-lightBlue'> <h1 className='text-center text-2xl font-bold'>Total Price:</h1>
              <p className='text-3xl text-center'>${currentCoupon === 'alphacode' ? totalPrice/2:totalPrice}</p>
             </div>
          <div className='flex flex-col gap-2 mt-6'>
             <label>Insert coupon 'alphacode' for 50%</label>
            <input type="text" placeholder='Insert copun' name="" id="" className='p-2 border rounded-lg' ref={coupon}/>
            <button onClick={handleCoupon} className='bg-mainBlue text-whiteTextColor px-5 py-2 rounded-lg'>Apply</button>
          </div>
          <div>
            <select className='w-full px-2 py-1 border border-slate-500 rounded-full bg-whiteTextColor mt-5'>
              {Country.map((el,i)=>{
                return <option key='i' value={el.code}>{el.name}</option>
              })}
            </select>
          </div>
          <button className='bg-mainYellow text-whiteTextColor px-5 py-2 rounded-lg mt-4'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage