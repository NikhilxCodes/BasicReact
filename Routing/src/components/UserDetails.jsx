import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const {name}=useParams();
    const navigate=useNavigate();

    const GoBackHandler=()=>{
        // navigate("/user");
        navigate(-1);
    }
  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-3xl text-red-300 mb-2'>User Details</h1>
      <h1 className='text-2xl mt-5'>Hey! {name}</h1>
      <button onClick={GoBackHandler} className='text-white px-3 py-2 mt-5 bg-red-300'> Go Back </button>
    </div>
  )
}

export default UserDetails
