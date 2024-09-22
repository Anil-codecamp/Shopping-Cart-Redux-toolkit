import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../features/cartslice';

const Header = () => {
 const {cart,totalQuantity}=useSelector((state)=>state.allCart)
 const dispatch=useDispatch()

 useEffect(()=>{
  dispatch(getCartTotal())
 },[cart])
 
  
  return (
    <div>
      <div className='text-center mt-7 text-[2rem] flex justify-evenly relative'>
      <NavLink to="/">All product</NavLink>
      <NavLink to="/cart"><MdShoppingCart/><span className=' top-0 ml-2 text-blue-500 absolute ' >{totalQuantity}</span></NavLink>
      
    </div>
    </div>
  )
}

export default Header
