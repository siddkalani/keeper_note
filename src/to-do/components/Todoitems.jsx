import useState from "react"
import React from 'react'


const Todoitems = (props) => {
  return (
    <div onClick={()=>{
      props.onChecked(props.id)
    }}>
      <li>{props.text}</li>
    </div>   
  )
}

export default Todoitems