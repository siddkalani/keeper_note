//stopwatch
// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {
//     const[time , setTime] = useState(0)
//     let timehandle;
//     useEffect(()=> {
//         timehandler();
//         return()=>{
//             clearInterval(timehandle)
//         }
//     },)

//     function timehandler(){
//      timehandle = setInterval(() => {
//            setTime(preValue=>preValue+1)
//         }, 50);

//     }
//     const pause = () => {
//         clearInterval(timehandle)
//     }

//   return (
//     <div>
//         <h1>{time}</h1>
//         <button onClick={pause}>Pause</button>
//         <button onClick={()=>setTime(0)}>Restart</button>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [mili, setMili] = useState(0)
  const [isRunning , setIsRunning] = useState(false)
  const timeInterval = useRef(0)
  const miliInterval = useRef(0)
  const [sec, setSec] = useState(0)




   const handleStart = async() => {
    if(!isRunning){
      setIsRunning(true)

  
      miliInterval.current = setInterval(() => {
        setMili((prevValue) =>{
         if(prevValue >= 99){
          setSec(prevSec => prevSec + 1)
         } else {
          return prevValue + 1
        }
        })
      }, 10);
      

    }

    
  } 
  console.log(sec)
  
  const handlePause=()=>{
    setIsRunning(false)
    clearInterval(miliInterval.current)
    clearInterval(timeInterval.current)
  }

  const handleReset=()=>{
    clearInterval(timeInterval.current)
    clearInterval(miliInterval.current)
    setIsRunning(false)
    setMili(0)
    setSec(0)
    
  }

  return (
    <div>
      <h1>Stopwatch</h1> <br />
      <h2>{`${String(sec).padStart(2 , '0')}`}:{`${mili < 100 ? String(mili).padStart(2 , '0') : setMili(0)}`}</h2> <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App


