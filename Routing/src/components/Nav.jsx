// 3 ways to add styles to active links
// 1. Using className prop and a function that returns a string
// 2. Using style prop and a function that returns an object
// 3. Using children prop and a function that returns a react element
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='mt-10 flex justify-center gap-10'>
        <NavLink to="/">
            {(e)=>{
                return (
                    <span className={
                        e.isActive ? "text-red-500 font-bold" : ""
                    }>Home</span>
                )
            }}
        </NavLink>
        <NavLink style={(e)=>{
            return {
                color: e.isActive ? "#FCA5A5" : "",
                fontWeight: e.isActive ? "bold" : ""
            }
        }}  to="/about">About</NavLink>
        <NavLink className={(e)=>{
            return [
                e.isActive ? "text-red-300" : "",
                e.isActive ? "font-bold" : ""
            ].join(" ")
        }}  to="/user">User</NavLink>
    </nav>
  )
}

export default Nav
