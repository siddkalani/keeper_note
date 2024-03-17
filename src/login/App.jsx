import React from "react";
import Login from "./components/login";

var loggedin = false;


function App() {
  return (
    <div className="container">
     <Login register={loggedin}/>
      
    </div>
  );
}

export default App;
