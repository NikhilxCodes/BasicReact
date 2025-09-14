import React from 'react'

const Card = () => {
  const data=[
    {image:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Amazon Basics',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed quam et est dictum elementum at vel enim.',stock:true},
    {image:'https://images.unsplash.com/photo-1579693409321-1be2df1ab130?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:'Apple',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',stock:false},
    {image:'https://plus.unsplash.com/premium_photo-1682542226222-d104741d7d03?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Daily Object',description:'Lorem ipsum dolor.',stock:true}
  ]
  // handleClick function to show alert when button is clicked  
  const handleClick = () => {
    alert("ok");
  }

  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
      {data.map((elem,index)=>(
      <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300'>
          <img className='w-full h-full object-cover' src={elem.image} alt="" />
        </div>
        <div className='w-full px-3 py-4'>
          <h2 className='font-semibold'>{elem.name}</h2>
          <p className='text-sm mt-3'>{elem.description}</p>
          
          {/* Conditional Handling- Add a button to add to cart & change in claass name */}
          <button onClick={handleClick} className={`px-4 py-1 ${elem.stock ? "bg-sky-600" : "bg-red-600"} text-xs rounded text-zinc-100 my-3`}>{elem.stock ? "InStock" : "OutStock"}</button>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Card
