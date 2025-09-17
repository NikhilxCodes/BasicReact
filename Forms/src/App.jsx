import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

const App = () => {
  const [users,setUsers]=useState([]);
  const handleFormSubmit=(data)=>{
    setUsers([...users,data])
  }
  const handleRemove=(id)=>{
    setUsers(()=>users.filter((item,index)=>index!==id))
  }
  return (
    <div className='w-full h-screen bg-zinc-200 flex justify-center items-center'>
      <div className='container mx-auto'>
        <Cards handleRemove={handleRemove} users={users} />
        <Form handleFormSubmit={handleFormSubmit}/>
      </div>
    </div>
  )
}

export default App









// 3rd way using react-hook-form library to handle form submission
// import React from 'react'
// import { useForm } from 'react-hook-form';
// const App = () => {
//   const {register,handleSubmit}=useForm();
//   return (
//     <form action="" onSubmit={handleSubmit(data=>console.log(data))}>
//       <input {...register('name')} placeholder='name' type="text" className='border-2'/>
//       <input {...register('email')} placeholder='email' type="email" className='border-2'/>
//       <input type="submit" />
//     </form>
//   )
// }

// export default App




// 2nd way using Controlled components useState to handle form submission
// import React, { useRef, useState } from 'react'

// const App = () => {
//   const [val,setVal]=useState({name:"",email:""})

//   const handleSubmit=(event)=>{
//     // page will not get refreshed because of preventDefault
//     event.preventDefault();
//     console.log(val);
//   }

//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <input onChange={(event)=>setVal({...val,name:event.target.value})} placeholder='name' type="text" className='border-2'/>
//       <input onChange={(event)=>setVal({...val,email:event.target.value})} placeholder='email' type="text" className='border-2'/>
//       <input type="submit" />
//     </form>
//   )
// }

// export default App








// 1st way using useRef to handle form submission
// import React, { useRef } from 'react'

// const App = () => {
//   const name=useRef(null);
//   const age=useRef(null);

//   const handleSubmit=(event)=>{
//     // page will not get refreshed because of preventDefault
//     event.preventDefault();
//     console.log(name.current.value);
//     console.log(age.current.value);
//   }

//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <input ref={name} placeholder='name' type="text" className='border-2'/>
//       <input ref={age} placeholder='age' type="text" className='border-2'/>
//       <input type="submit" />
//     </form>
//   )
// }

// export default App
