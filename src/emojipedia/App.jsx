import React from "react";
import emojipedia from "./emojipedia";
import Entry from "./Entry";

function App() {
  return (

  <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(NewCard=>(
<Entry
key={NewCard.id}
name={NewCard.name}
emoji={NewCard.emoji}
meaning={NewCard.meaning}
/>
))}</dl>
    </div>
   
  );
}

export default App;
