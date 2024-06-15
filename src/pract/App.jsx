import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const[time , setTime] = useState(null);
  const[elapsed , setElapsed] = useState(null);

  const intervalRef = useRef(null);


  const handleStart = () =>{
    setTime(Date.now());
    time = Date.now();
    setElapsed(Date.now());
    intervalRef.current = setInterval(() => {
      setTime(Date.now())
    }, 1000);
  }

  const handlePause = () =>{
    clearInterval(intervalRef.current);
  }

  // const handleReset = () =>{
  //   displayTime = 0;
  // }

  let displayTime = (time-elapsed)/1000;
  
  return (
    <div>
        <h1>stopwatch</h1>
        <h1>{displayTime.toFixed(3)}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handlePause}>pause</button>
        {/* <button onClick={handleReset}>reset</button> */}
    </div>
  )
}

export default App


// import { useState } from "react"
// import React from 'react'


// const App = () => {
//   const[contact , setContact] = useState({
//     fname:"",
//     lname:"",
//     email:""
//   })

//   const handleChange=(e)=>{
//     const {value , name} = e.target;

//     setContact(preValue =>{
//       return{
//         ...preValue,
//         [name]:value,
        
//       }
      
//     }
//   )}

//   function handleSubmit(e) {
//     // e.preventDefault();
//     alert(`hello ${contact.fname} ${contact.lname} ${contact.email}`)
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>

//         <label htmlFor="">enter your fname here
//         <input 
//         type="text" 
//         name="fname"
//         placeholder='eg:siddharth'
//         value={contact.fname}
//         onChange={handleChange} 
//         />
//         </label>

//         <label htmlFor="">enter your last name here
//         <input 
//         type="text" 
//         name="lname"
//         placeholder='eg:kalani'
//         value={contact.lname}
//         onChange={handleChange} 
//         />
//         </label>

//         <label htmlFor="">enter your email here
//         <input 
//         type="text" 
//         name="email"
//         placeholder='eg:s@gmail.com'
//         value={contact.email}
//         onChange={handleChange} 
//         />
//         </label>

//         <input type="submit"/>
//       </form>
//     </div>
//   )
// }

// export default App