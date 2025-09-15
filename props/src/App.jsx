import React , {useState} from 'react'
import Cards from './Components/Cards'
import Navbar from './Components/Navbar'

const App = () => {
  const data=[
    {image:"https://plus.unsplash.com/premium_photo-1680550633623-8dc4548fb751?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"pal do pal",artist:"Nikhil",added:false },
    {image:"https://images.unsplash.com/photo-1598387846148-47e82ee120cc?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"humsafar",artist:"shayam",added:false },
    {image:"https://plus.unsplash.com/premium_photo-1682125232467-8fcf48869840?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"ek mein aur",artist:"rahul",added:false },
    {image:"https://images.unsplash.com/photo-1559743345-24713f59f5e3?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"suraj hua",artist:"ram",added:false }
  ];
  const[songData,setSongData]=useState(data);

  const handleClick=(cardindex)=>{
    setSongData((prev)=>{
      // it will return a array to work
      return prev.map((obj,index)=>{
        if(index===cardindex){
          return {...obj,added:!obj.added}
        }
        return obj;
      })
    })
  } 

  return ( 
    <>
      <div className='w-full h-screen bg-zinc-300'>
        <Navbar data={songData}/>
        <div className='px-20 flex gap-10 mt-8 flex-wrap'>
          {songData.map((obj,index)=>(
            <Cards data={obj} handleClick={handleClick} cardindex={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App










//project-1
// import React , {useState} from 'react'
// import Cards from './Components/Cards'

// const App = () => {
//   const data=[
//     {name: 'Nikhil', profession: 'Software Engineer',image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false },
//     {name: 'Sagar', profession: 'Graphic designer',image:"https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false },
//     {name: 'Rahul', profession: 'Technical Analyst',image:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , friends:false}
//   ]

//   // useState jahan likha hai wahin update hoga

//   const [realData,setRealData] = useState(data);
//   const handelFriendsButton=(cardindex)=>{
//     setRealData((prev)=>{
//       return prev.map((item,index)=>{
//         if(index === cardindex){
//           return {...item,friends:!item.friends}
//         }
//         return item;
//       })
//     })
//   }

//   return ( 
//     <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
//       {realData.map((item,index)=>(
//         <Cards key={index} index={index} handelClick={handelFriendsButton} image={item.image} profession={item.profession} name={item.name} friends={item.friends}/>
//       ))} 
//     </div>
//   )
// }

// export default App
