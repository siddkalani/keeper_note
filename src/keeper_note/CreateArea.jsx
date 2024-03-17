import React , {useState} from "react";

function CreateArea(props) {
    const[note,setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(event){

        const {name,value} = event.target;

        setNote(preValue=>{
           return{ ...preValue
            ,[name]:value
        } }
        )}
         
        function handleClick(event){
        event.preventDefault();
        props.onAdd(note)
        }
    
  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}


export default CreateArea;