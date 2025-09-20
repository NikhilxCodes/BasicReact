import React, { createContext, useState } from 'react'

export const UserContext=createContext();

const Context = (props) => {

    const [users, setUsers] = useState([
        {id: 0 , name: "John Doe" , city: "New York"},
        {id: 1 , name: "Jane Smith" , city: "Los Angeles"},
        {id: 2 , name: "Mike Johnson" , city: "Chicago"},
        {id: 3 , name: "Emily Davis" , city: "Houston"},
        {id: 4 , name: "David Wilson" , city: "Phoenix"}
    ])

    console.log(props);
    return <UserContext.Provider value={{users,setUsers}} >{props.children}</UserContext.Provider>
}

export default Context
