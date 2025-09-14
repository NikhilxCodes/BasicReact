// step-5 - example
import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const App = () => {
  const [val,setVal]=useState(false);
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className='relative w-60 h-32 bg-zinc-500 rounded-md overflow-hidden flex'>
        <img className={`shrink-0 duration-500 transition-transform ${val==false ? "-translate-x-[0%]":"-translate-x-[100%]"} w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1673169751409-4bae7648b868?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className={`shrink-0 duration-500 transition-transform ${val==false ? "-translate-x-[0%]":"-translate-x-[100%]"} w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1707213919549-deeb789008c0?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <span onClick={()=>setVal(()=>!val)} className='w-7 h-7 flex items-center justify-center rounded-full bg-[#dadada9b] bg-zinc-200 absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <FaArrowRightLong size={".8em"}/> 
        </span>
      </div>
    </div>
  )
}

export default App






// // step-> 4 - useState for array adition
// import React, { useState } from 'react'

// const App = () => {
//   const [val,setVal]=useState([
//     {name: 'Nikhil', age: 25 },
//     {name: 'Sagar', age: 28 },
//     {name: 'Rajesh', age: 27 }
//   ]);
//   return (
//     <div className='p-4'>
//       {val.map((item)=>(
//         <>
//           <h1>{item.name}</h1>
//           <h2>{item.age}</h2>
//         </>
//     ))}
//       {/* important */}
//       <button onClick={()=>setVal(()=>val.map(item=>item.name==='Sagar' ? ({name:'Sagar',age:30}) : item))} className='px-2 py-1 rounded-full bg-blue-500 text-xs text-white'>click</button>
//     </div>
//   )
// }

// export default App





//step-3
// useState State ko turant update nahi karta 
//useState for Array for removal

// import React, { useState } from 'react'

// const App = () => {
//   const [val,setVal]=useState([1,2,3,4,5]);
//   return (
//     <div className='p-4'>
//       {val.map(item=><h1>{item}</h1>)}
//       {/* important using filter */}
//       <button onClick={()=>setVal(()=>{
//         return val.filter((item,index)=>item%2!=0)
//       })} className='px-2 py-1 rounded-full bg-blue-500 text-xs text-white'>click</button>
//     </div>
//   )
// }

// export default App




//step-2 = for objects
// import React, { useState } from 'react'
// import Cards from './Components/Cards'

// const App = () => {
//   const [Val,setVal]=useState({name:"Nikhil",isBan:true});
//   return (
//     <div className='px-3 py-4'>
//       <h1>name: {Val.name}</h1>
//       <h1>isban: {Val.isBan.toString()}</h1>
//       <button onClick={()=>setVal({...Val,isBan:!Val.isBan})} className={`${Val.isBan ? "bg-blue-500" : "bg-red-500"} rounded-full text-xs px-2 py-1 text-white`}>Val Status</button>
//     </div>
//   )
// }

// export default App




// step-1 
// import React, { useState } from 'react'
// import Cards from './Components/Cards'

// const App = () => {
//   const [Val,setVal]=useState(12);
//   return (
//     <div className='px-3 py-4'>
//       <h1>{Val.toString()}</h1>
//       <button onClick={()=>setVal(prev=>prev+1)} className='bg-red-300 rounded-full text-xs px-2 py-1'>Val Status</button>
//     </div>
//   )
// }

// export default App
