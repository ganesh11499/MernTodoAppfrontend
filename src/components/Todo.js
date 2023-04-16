import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  FaPen, FaTrash } from "react-icons/fa";
import { dleteTodo, toggleTodo, updatTodo } from '../redux/actions';


const Todo = ({todo}) => {
  const [editing, setEditing] = useState(false)  
  const [text, setText] = useState(todo.data)
  const dispacth = useDispatch()


  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing(prevState => !prevState)
    dispacth(updatTodo(todo._id,text))
  }

  const handelDleete = (id) => {
    dispacth(dleteTodo(todo._id))
    setEditing(prevState => !prevState)
  }



  return (
   
        <li className='task'
        onClick={() =>dispacth(toggleTodo(todo._id))}
        style={{textDecoration:todo.done ? 'line-through' : '',
                 color:todo.done ? '#bdc3c7' : '#34495e' }}
        >
            <span style={{display:editing ? 'none': ''}}>{todo.data}</span>
            <form
             style={{display:editing ? 'inline': 'none'}}
             onSubmit={onFormSubmit}
            >
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} className='edit-todo' />
            </form>

            <span className='icon'>
               <FaPen size={15} onClick={() => setEditing(prevState => !prevState)}/>
            </span>
            <span className='icon' onClick={handelDleete}> 
               <FaTrash  size={15}/>
            </span>
        </li>
  
  )
}

export default Todo