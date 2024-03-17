import { useState } from "react"
import React from 'react'
import Todoitems from "./components/Todoitems"
import InputArea from "./components/InputArea"


function App () {
 
  const[items, editItem] = useState([])

function handleClick(note){
  editItem(preValue=>{
    return [...preValue, note ]
  })
}
function handleChecked(id){
editItem(preValue=>{
  return preValue.filter((items, index)=>{
    return index !== id
})
})
}

return (
<div className="container">
<div className="heading">
  <h1>To-Do List</h1>
</div>
<InputArea
onAdd={handleClick}
/>
<div>
  <ul>
 {items.map((todolist,index)=>
 <Todoitems
 text={todolist}
 onChecked={handleChecked}
 key={index}
 id={index}
 />)}
  </ul>
</div>
</div>
)
}

export default App