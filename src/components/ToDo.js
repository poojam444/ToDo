import React,{useState} from 'react'
import './ToDo.css'
import ToDoList from './ToDoList'

function ToDo() {
const[inputList, setInputList]=useState()
const[itmes, setItems] = useState([])
const handleChange =(event)=>{
    setInputList(event.target.value)
}

const handleClicked=()=>{
    setItems((oldItems)=>{
     return [...oldItems, inputList]
    })
    setInputList("")
}

const deleteItems=(id)=>{
    console.log("items deleted")
    setItems((oldItems)=>{
        return oldItems.filter((arrElem, index)=>{
            return index!==id;
        })
    })
}
  return (
    <div className='main_div'>
        <div className='center_div'>
            
            <h1>ToDO List</h1>
            <br/>
            
            
            <input type="text" placeholder='Add Your ToDo' value={inputList} onChange={handleChange}/>
            <button onClick={handleClicked}> + </button>
            <ol>
               

                {
                    itmes.map((data, index)=>{
                    return  <ToDoList 
                    key={index} 
                    id={index} 
                    text= {data}
                    onSelect={deleteItems}
                    />
                    })
                }
            </ol>
        </div>
    </div>
  )
}

export default ToDo