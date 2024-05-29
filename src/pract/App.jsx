import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const[time , setTime] = useState(null);
  const[elapsed , setElapsed] = useState(null);

  const intervalRef = useRef(null);


  const handleStart = () =>{
    setTime(Date.now());
    // time = Date.now();
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