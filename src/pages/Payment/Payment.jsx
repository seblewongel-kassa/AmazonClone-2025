import React, { useContext, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Utility/DataProvider/DataProvider'
import aaa from './payment.module.css'
import ProductCard from '../../Components/Products/ProductCard';

import {useStripe, useElements,CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import { ClipLoader } from 'react-spinners';
import {db} from "../../Utility/Firebase" 
import { useNavigate } from 'react-router-dom';
import { Type } from '../../Utility/action.type';

const Payment = () => {
  const [{user,basket},dispatch]=useContext(DataContext);

  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
},0)

const total = basket.reduce((amount,item)=>{
  return item.price * item.amount + amount
},0)

const [cardError, setCardError]=useState(null)
const [processing, setProcessing]=useState(false)

const stripe = useStripe();
const elements = useElements();
const navigate = useNavigate();

const handleChange = (e)=>{
  e?.error?.message? setCardError(e?.error?.message):setCardError("")
};

const handlePayment = async (e) => {
  e.preventDefault();
  try {
    setProcessing(true);

    const response = await axiosInstance({
      method: "POST",
      url: `/payment/create?total=${total * 100}`,
    });

    const clientSecret = response.data?.clientSecret;

    console.log("Client Secret:", clientSecret);

    
    if (!clientSecret) {
      throw new Error("Client secret not returned from backend.");
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setCardError(result.error.message);
      setProcessing(false);
      return;
    }

    const paymentIntent = result.paymentIntent;

    await db
      .collection("users")
      .doc(user.uid)
      .collection("orders")
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

    dispatch({ type: Type.EMPTY_BASKET });
    setProcessing(false);
    navigate("/orders", { state: { msg: "you have placed new Order" } });
  } catch (error) {
    console.log(error);
    setProcessing(false);
  }
};


  return (
    
    <LayOut>
      {/* header */}
    <div className={aaa.payment_header}>Checkout ({totalItem}) items</div>
      {/* Payment method  */}
      <section className={aaa.payment}>
        {/* address  */}
        <div className={aaa.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago,IL</div>
          </div>
        </div>
        <hr />

        {/* product  */}
        <div className={aaa.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item)=>(
              <ProductCard product={item} key={item.id} flex={true}/>
            ))}
          </div>
        </div>
        <hr />

        {/* card form  */}
        <div className={aaa.flex}>
          <h3>Payment method</h3>
          <div className={aaa.payment_card_container}>
            <div className={aaa.payment_details}>
              <form onSubmit={handlePayment}>
                {cardError && (<small style={{color:"red"}}>{cardError}</small>)}
                <CardElement onChange={handleChange}/>

                <div className={aaa.payment_price}>
                  <div>
                    <span style={{display:"flex",gap:"10px"}}>
                    Total Order | <CurrencyFormat amount={total}/>
                    </span>
                  </div>
                  <button type="submit">
                  {processing ? (
                      <div className={aaa.loading}>
                        <ClipLoader color='gray' size={12}/>
                        <p>Please Wait ...</p>
                      </div>
                    ):(
                      "Pay Now"

                    )}
                 </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  )
}

export default Payment