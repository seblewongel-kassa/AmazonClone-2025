import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoint'
import ProductCard from '../../Components/Products/ProductCard'
import aaa from './results.module.css'
import Loader from '../../Components/Loader/Loader'

const Results = () => {
  const [results, setResults] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const {categoryName}=useParams()
  useEffect(() => {
    setIsloading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
      setResults(res.data) 
      setIsloading(false)
      console.log(res.data)

    }).catch((err)=>{
      console.log(err)
      setIsloading(false)
    })
  }, [categoryName])
  
  return (
    
    <LayOut> 
      <section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p style={{padding:"30px"}}>category/{categoryName}</p>
        <hr/>

        {isLoading?(<Loader/>):(
          <div className={aaa.products_container}>
          {results?.map((product)=>(
            <ProductCard key={product.id}
            product={product}
            renderAdd={true}
            />
          ))}
        </div>
        )

        }
      </section>
      

    </LayOut>
  )
}

export default Results







