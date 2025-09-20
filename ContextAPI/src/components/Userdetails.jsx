import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useNavigate, useParams } from 'react-router-dom';

const Userdetails = () => {
  const {id} = useParams(); // to get the dynamic id from the url
  const {users}= useContext(UserContext);
  const navigate = useNavigate();

  console.log(users[id]); // to get the user data from the context
  return (
    <div>
      <h1 className='text-4xl font-bold text-red-200'>
        {users[id].name}
      </h1>
      <h3 className='text-2xl font-semibold text-blue-200'>
        {users[id].city}
      </h3>
      <button onClick={()=>navigate(-1)} className='bg-red-100 p-2 mt-5 rounded-md'>Go Back</button>
    </div>
  )
}

export default Userdetails
