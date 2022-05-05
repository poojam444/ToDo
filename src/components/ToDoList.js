import React from 'react'

function ToDoList(props) {

    
  return (
      <div className='todo-style'>  
      <button onClick={()=>{
          props.onSelect(props.id)
      }}> - </button>  
       <li> {props.text}</li> 
       </div>

  )
}

export default ToDoList