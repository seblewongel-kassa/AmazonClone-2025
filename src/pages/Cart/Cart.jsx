import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Utility/DataProvider/DataProvider';
import ProductCard from '../../Components/Products/ProductCard';
import CurrencyFormat from './../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import aaa from './cart.module.css'
import { Type } from '../../Utility/action.type';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Cart = () => {

  const [{basket,user},dispatch]=useContext(DataContext)
  const total = basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)

  const increment = (item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
  const decrement = (id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }

  return (
    
    <LayOut>
      <section className={aaa.container}>
        <div className={aaa.cart_container}>
          <h2>Hello</h2>
              <h3>Your shoping basket</h3>
              <hr />
              {
                basket?.length==0?(<p>Opps ! No item in your cart</p>):(basket?.map((item,i)=>{
                  return <section className={aaa.cart_product}>
                    <ProductCard   key={i}     
                    product={item}      
                    renderDesc={true}
                    flex={true}
                    renderAdd={false}
                    />
                    <div className={aaa.btn_container}>
                      <button className={aaa.btn} onClick={()=>increment(item)}><IoIosArrowUp size={20}/></button>
                      <span>{item.amount}</span>
                      <button className={aaa.btn} onClick={()=>decrement(item.id)}><IoIosArrowDown size={20}/></button>
                    </div>
                  </section> 
                    
                  })
              )
          }
        </div>

        {basket?.length !==0 && (
          <div className={aaa.subtotal}>
            <div>
              
                <p>Subtotal({basket?.length} items)</p>
                <CurrencyFormat amount={total}/>
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payment">Continue to checkout</Link>
            </div>
          
        )}
      </section>
    </LayOut>
  )
}

export default Cart