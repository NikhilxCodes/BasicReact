import React from 'react'
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom'
import User from './components/User'
import About from './components/About'
import UserDetails from './components/UserDetails'

const App = () => {
  return (
    <div className='pt-1 w-1/2 m-auto  '>
      <nav className='my-10 flex justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/About">About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />}/>
        {/* dynamic routing for user id: */}
        <Route path='/user/:id' element={<UserDetails/>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
