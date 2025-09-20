import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'

const Services = () => {

  const [first,setfirst]=useState("this is normal data");
  const [second,setsecond]=useState("this is very large data");

  const getusers=()=>{
    // const api="https://fakestoreapi.com/users";

    axios.get("/users").then((users)=>{
      console.log(users.data)
    }).catch((err)=>{console.log(err)}) 
  }

  useEffect(()=>{
    getusers();
    // component create hone pr ye chalega
      console.log("Services Component Created")

      // component delete hone pr ye chalega
      return ()=>{
          console.log("Services Component Deleted")
      }
  },[second]) // using [] re-rendering is stopped and only update will happen and using [second] re-rendering will happen when second state is changed only

  return (
    <div>
      <h1>{first}</h1>
      <button onClick={()=>setfirst("Normal Data has been changed")} className='rounded mb-10 p-2 bg-red-200'>Change Normal Data</button>

      <h1>{second}</h1>
      <button onClick={()=>setsecond("Large Data has been changed")} className='rounded p-2 bg-blue-200'>Change Large Data</button>
    </div>
  )
}

export default Services
