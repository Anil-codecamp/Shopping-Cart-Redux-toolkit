import React from 'react'
// import { ShopProduct } from './ShopProduct';
import './myshop.css'
import styles from "./Button.module.css";

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './features/cartslice';



const Myshop = () => {
    const items=useSelector((state)=>state.allCart.items)
    //console.log(items);

    const dispatch=useDispatch();
    

  return (
    <>
    
    <div className="advent">
      <h2>Camping Shop</h2>
      <h1>Adventure Essential</h1>
    </div>
    <div className="shop-container"> 
      {
        items.map((curElm)=>{
          const {title,description,img,price}=curElm;
         
          return(

           
            <div className="product-container" key={curElm.id}>
              <div className="product-image">
                <img src={img} alt=""/>
              </div>
              <div className="content">
                <h2>{title}</h2>
                <h1>{description}</h1>
                <p>${price}</p>
              </div>
              <button className={styles.button} onClick={()=>dispatch(addToCart(curElm))}>Add to cart</button>
             
              
            </div>
            
            
          )

        })
      }
    </div>
    </>
  )
}

export default Myshop
