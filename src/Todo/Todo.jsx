import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToTodo } from './todoSlice'

 export function Todo() {

    const todoList = useSelector((state) => state.todo.value)
    const [inptValue,setinptValue] =useState("")
    const dispatch = useDispatch()
  return (
    <div className='todo'>

    <input type="text" onChange={(e)=>setinptValue(e.target.value)}  value={inptValue}/>
    <button onClick={()=>dispatch(addToTodo(inptValue))}>add</button>
    
    <div>
        {todoList.map(x=>(
            <ul>
                <li>{x}</li>
            </ul>
        ))}

 


    </div>

    </div>
  )
}

