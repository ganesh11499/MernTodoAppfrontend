import axios from 'axios';
import { ADDNEW_TODO, DELETE_TODO, GETALL_TODO, TOGGLE_TAB, TOGGLE_TODO, UPDATE_TODO } from './type';

const API_URI = 'https://mern-todo-app-0qzr.onrender.com' 


export const addNewTodo = (data) =>async(dispacth) => {
    try { 
     const res = await axios.post(`${API_URI}/todos`,{data});

    dispacth({type:ADDNEW_TODO, payload:res.data});

    } catch (error) {
        console.log('Error while calling NewTodo', error.message)
    }
   
};

export const getAllTodos =() => async(dispacth) => {
    try {
        const res = await axios.get(`${API_URI}/todos`);
        
         dispacth({type:GETALL_TODO, payload:res.data});
    } catch (error) {
        console.log('Error while calling todoas', error.message)
        
    }
};

export const toggleTodo = (id) => async (dispacth) => {
    try {
        const res = await axios.get(`${API_URI}/todos/${id}`)
        dispacth({type:TOGGLE_TODO, payload:res.data})
    } catch (error) {
       console.log('Error while calling Todo', error.message)
        
    }
}

export const updatTodo = (id, data) => async (dispacth) => {
    try {
        const res = await axios.put(`${API_URI}/todos/${id}`, {data})
        dispacth({type:UPDATE_TODO, payload:res.data})
    } catch (error) {
       console.log('Error while calling UpdateTOdo API', error.message)
        
    }
}


export const dleteTodo = (id) => async(dispacth) => {
    try {
        const res = await axios.delete(`${API_URI}/todos/${id}`)

        dispacth({type:DELETE_TODO, payload:res.data})
    } catch (error) {
        console.log('Error while delte data', error.message)
    }
}

export const toggleTab = (tab) => async(dispacth) => {  
    dispacth({type:TOGGLE_TAB, selected:tab})
}