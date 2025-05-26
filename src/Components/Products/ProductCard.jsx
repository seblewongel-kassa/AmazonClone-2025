import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import aaa from './product.module.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../../Utility/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';


const ProductCard = ({product,flex,renderDesc,renderAdd}) => {

    const {image, id, title, price, rating, description }=product

    const [state,dispatch]= useContext(DataContext)
    const addToCart =()=>{ 
        dispatch({
            type:Type.ADD_TO_BASKET,
            item:{
                image, id, title, price, rating, description
            }
        })
    }
    

  return (
    <div className={`${aaa.card_container} ${flex?aaa.product_flexed: ''}`}>
        <Link to={`/products/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div>
            <h3>{title}</h3>
            {renderDesc && <div style={{width:"600px",textAlign:'justify'} }>{description}</div>}
            <div className={aaa.rating}>
                {/* rating */}
                <Rating value={rating?.rate || 0} precision={0.1}/>
                {/* count */}
                <small>{rating?.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price}/>
            </div>

            {
                renderAdd && <button className={aaa.button} onClick={addToCart}>
                add to cart
            </button>
            }
        
        </div>
    </div>
  )
}

export default ProductCard

