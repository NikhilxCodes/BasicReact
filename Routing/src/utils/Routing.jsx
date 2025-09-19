import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import UserDetails from '../components/UserDetails'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        {/* to link to differnt components and write
        <Route path='/user' element={<User/>}/>
        <Route path='/user/:name' element={<UserDetails/>}/> */}

      {/* to write in same componetent form chile using outlet */}
        <Route path='/user' element={<User/>}>
          <Route path='/user/:name' element={<UserDetails/>}/>
        </Route>
        
      </Routes>
  )
}
 
export default Routing
