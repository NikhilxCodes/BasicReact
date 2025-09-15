import React from 'react'
import Style from './Styles.module.css'
const Navbar = ({data}) => {
  return (
    <div className='w-full px-20 py-3 flex justify-between item-center '>
      <div className={`${Style.a} ${Style.b}`}>
        <h3 >Orange</h3>
      </div>
      <div className='flex p-2 px-4 bg-orange-600 text-white rounded text-sm gap-3'>
        <h3>Favourities</h3>
        <h4>{data.filter(item=>item.added==true).length}</h4>
      </div>
    </div>
  )
}

export default Navbar
