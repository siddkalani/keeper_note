import React from 'react'
import Avatar from './Avatar'
import Detail from './Detail'

function card(props) {
  return (
    <div>
      <div>
       <Detail details={props.name}/>
        <p>my class:{props.class}</p>
        <Avatar img={props.img}/>
      </div>

    </div>
  )
}

export default card