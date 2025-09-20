import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from '../utils/Axios'

const Show = () => {
  const [products, setProducts] = useState([]);

  const getProducts=()=>{
    // const api="https://fakestoreapi.com/products"
  
    axios.get("/products").then((products)=>{
      console.log(products)
      setProducts(products.data)
    }).catch((err)=>{console.log(err)}) 
  }

  useEffect(()=>{
    getProducts()
  }, []) // useEffect will run only once when the component mounts and when the product state changes


  return (
    <>   
        {/* <button onClick={getProducts} className='px-5 py-3 bg-red-300 rounded-md'>Call Product API</button>
        <hr /> */}
        <ul>
            {products.length > 0 ? products.map(p=> <li key={p.id} className='rounded-md p-5 bg-red-200 my-2'>{p.title}</li>) : <h1>Loading</h1>}
        </ul>
    </>
  )
}

export default Show
