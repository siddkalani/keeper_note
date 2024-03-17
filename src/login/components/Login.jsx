import React from 'react'
import Input from './Input';

function Login (props){
  return (
    <div><form className="form">
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="Password" />
    {props.register === true && <Input type="password" placeholder="Confirm Password" />}
   {props.register===true?<button type="submit">register</button>:<button type="submit">login</button>}
    </form>
    </div>
  )
}

export default Login;