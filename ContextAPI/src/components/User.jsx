import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context'

const User = () => {

  const {users,setusers}= useContext(UserContext);

  return (
    <div>
      <h1 className='text-3xl'>User List</h1>
      <div className='w-1/2 mt-10 flex flex-col'>
        {users.map( u =>(
          <Link to={`/user/${u.id}`} className='p-3 mb-3 bg-red-100' key={u.id}>
            {u.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default User
