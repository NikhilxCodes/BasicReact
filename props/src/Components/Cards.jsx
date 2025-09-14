import React from 'react'

const Cards = ({image,name,profession,friends,handelClick,index}) => {
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative'>
        <div className='w-20 h-20 bg-orange-600 rounded-md'></div>
        <div className=''>
            <h3 className='text-xl leading-none font-semibold'>Song Name</h3>
            <h6 className='text-sm'>Artist Name</h6>
        </div>
        <button className='px-4 py-3 bg-orange-600 whitespace-nowrap absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full'>Add to Favourities</button>
    </div>
  )
}

export default Cards








//project-1
// import React from 'react'

// const Cards = ({image,name,profession,friends,handelClick,index}) => {
//   return (
//     <div className='w-52 bg-white rounded-md overflow-hidden'>
//         <div className='w-full h-32 bg-sky-200'>
//             <img src={image} alt="" />
//         </div>
//         <div className='w-full p-3'>
//             <h3 className='text-xl font-semibold'>{name}</h3>
//             <h5 className='text-xs'>{profession}</h5>
//             <button onClick={()=>handelClick(index)} className={`mt-4 px-3 py-1 text-xs text-white ${friends?"bg-blue-500":"bg-red-500"} font-semibold rounded-md`}>{friends==true?"friends":"Add friends"}</button>
//         </div>
//     </div>
//   )
// }

// export default Cards






//step-1- simple catching of props from app.jsx
// import React from 'react'

// const Cards = ({text,color}) => {
//   return (
//       <button className={`px-3 py-1 ${color} text-zinc-100 rounded m-3 text-xs`}>{text}</button>
//   )
// }

// export default Cards
