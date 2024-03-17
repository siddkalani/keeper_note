
import React , { useState } from 'react';



function App() {
  const[fullName , setFullName] = useState({
    fName:"",
    lName:"",
    email:""
  })
 
  
  function handleChange(event){
const{value , name} = event.target;

setFullName(newValue=>{
  return{
    ...newValue,
    [name]: value
  }
  })
}
  
    return (
      <form>
      <div className="container">
        <h1>Hello {fullName.fName} {fullName.lName}</h1><br></br>

        {fullName.email}

        <input name='fName' type="text" placeholder="What's your name?"
          value={fullName.fName} 
         onChange={handleChange}/>

        <input name='lName' 
        type="text" 
        placeholder="What's your surname?" 
         value={fullName.lName} 
        onChange={handleChange}/>

        <input name='email' 
        type="text" 
        placeholder="What's your email?" 
         value={fullName.email} 
        onChange={handleChange}/>
      
        <button>
       
        Submit
        
        </button>
        
      </div>
      </form>
    );
  
}
export default App




