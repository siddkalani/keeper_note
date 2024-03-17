import React from 'react'
import Card from './card'
import contacts from './contacts'
import Detail from './Detail'

function Createcard(contacts){
   return (<Card 
  key={contacts.id}
  name={contacts.name}
  img = {contacts.imgURL}
  class={contacts.class}
   
  />
   )
}

function App() {
  return (
    <div>
    <h1>our class info</h1>
    {contacts.map(Createcard)}
    {/* <Card
          name = {contacts[0].name}
          img = {contacts[0].imgURL}
          class={contacts[0].class}
    />
        <Card
          name ={contacts[1].name}
          class={contacts[1].class}
    />
        <Card
          name={contacts[2].name}
          class={contacts[2].class}
    /> */}
    </div>
  )
 
}

export default App