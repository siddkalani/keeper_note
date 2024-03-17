
import React from "react";
import { useState } from "react";

function InputArea(props){
  const[note , editnote] = useState("")

  function handlevent(event) {
    const target = event.target.value;
    editnote(target)
 }

  return (
    <div className="form">
      <input onChange={handlevent} type="text" value={note} />
      <button onClick = {()=>{
        props.onAdd(note);
        editnote("")
      }}>
        <span> Add </span>
      </button>
    </div>
  );
}

export default InputArea;