import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../redux/actions'

const TodoForm = () => {
   const dispatch = useDispatch()

   const [text, setText] = useState("")

   const onFormSubmit = (e) => {
    e.preventDefault();
  
    dispatch(addNewTodo(text))
    
    setText(' ');
    
   }
  

   const  OnInputChange = (e) => {   
    setText(e.target.value)
   } 



  return (
    <form className="form" onSubmit={onFormSubmit}>
        <input placeholder='Enter New Todo... ' className='input' onChange={OnInputChange} value={text}/>
        
    </form>
  )
}

export default TodoForm