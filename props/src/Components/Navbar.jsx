import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-20 py-3 flex justify-between item-center '>
      <h3>Orange</h3>
      <div className='flex p-2 px-4 bg-orange-600 text-white rounded text-sm gap-3'>
        <h3>Favourities</h3>
        <h4>2</h4>
      </div>
    </div>
  )
}

export default Navbar
