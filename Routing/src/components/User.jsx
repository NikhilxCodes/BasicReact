import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-5xl text-red-300 mb-2'>User</h1>
      <div className='flex w-1/2 flex-col mt-5'>
        <Link className='p-3 bg-red-200 text-xl mb-3 hover:bg-red-300' to="/user/nikhil">Nikhil</Link>
        <Link className='p-3 bg-red-200 text-xl mb-3 hover:bg-red-300' to="/user/sagar">Sagar</Link>
        <Link className='p-3 bg-red-200 text-xl mb-3 hover:bg-red-300' to="/user/hitesh">Hitesh</Link>

        <hr />
        {/* to render the child component dynamically */}
        <Outlet/>
      </div>
    </div>
  )
}

export default User
