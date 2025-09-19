import React, { useEffect } from 'react'

const Services = () => {

    useEffect(()=>{
        console.log("Services Component Created")

        // component delete hone pr ye chalega
        return ()=>{
            console.log("Services Component Deleted")
        }
    })

  return (
    <div>
      Services
    </div>
  )
}

export default Services
