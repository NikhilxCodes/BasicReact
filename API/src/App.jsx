import React, { useState } from 'react'
import axios from 'axios'
import { Link, Route, Routes as Routes } from 'react-router-dom'
import Home from './components/Home'
import Show from './components/Show'
import Services from './components/Services'
const App = () => {

  return (
    <div className='p-10'>
      <nav className='flex justify-center gap-10 text-2xl font-medium text-red-400 mb-5'>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/show'>Show</Link>
      </nav> 
      <hr />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/show' element={<Show/>}/>
      </Routes>
    </div>
  ) 
}

export default App









// API Integration using Axios
// import React, { useState } from 'react'
// import axios from 'axios'
// const App = () => {

//   const [products, setProducts] = useState([]);

//   const getProducts=()=>{
//     const api="https://fakestoreapi.com/products"
  
//     axios.get(api).then((products)=>{
//       console.log(products)
//       setProducts(products.data)
//     }).catch((err)=>{console.log(err)}) 
//   }

//   const addProducts=()=>{
//     const api="https://fakestoreapi.com/products"
  
//     axios.post(api,{
//       "id": 0,
//       "title": "string",
//       "price": 0.1,
//       "description": "string",
//       "category": "string",
//       "image": "http://example.com"
//     }).then((res)=>{
//       console.log(res)
//     }).catch((err)=>{console.log(err)}) 
//   }

//   console.log(products)
//   return (
//     <div className='p-10'>
//       <button onClick={getProducts} className='px-5 py-3 bg-red-300 rounded-md'>Call Product API</button>
//       <br />
//       <br />
//       <button onClick={addProducts} className='px-5 py-3 bg-red-300 rounded-md'>Save new Product in API</button>
//       <hr className='my-10'/>
//       <ul>
//         {products.length > 0 ? products.map(p=> <li key={p.id} className='rounded-md p-5 bg-red-200 my-2'>{p.title}</li>) : <h1>Loading</h1>}
//       </ul>
//     </div>
//   )
// }

// export default App
