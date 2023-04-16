import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dleteTodo, getAllTodos } from "../redux/actions/index";
import Todo from "./Todo";
import Tabs from "./Tabs";
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from "../redux/actions/type";


export const Todos = () => {
  const dispacth = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector(state => state.currentTab)

  useEffect(() => {
    dispacth(getAllTodos());
  }, []);


  const getTodos = () => {
    if(currentTab === ALL_TODOS){
      return todos;
    }else if(currentTab === ACTIVE_TODOS) {
      return todos.filter(todo =>!todo.done)
    }else if(currentTab === DONE_TODOS) {
      return todos.filter(todo => todo.done)
    }
  }

const removeDoneTodos = () => {
 todos.forEach(({done,_id}) => {
  if(done) {
    dispacth(dleteTodo(_id));
  }
 })
}


  return (
    <atticle>
     <div>
     <Tabs currentTab={currentTab}/>
     {
      todos.some(todo => todo.data) ? (
        <button onClick={removeDoneTodos} className="button clear">Remove Done Todos </button>
      ): null
     }
     </div>
      <ul>
        {
          getTodos().map(todo => {
            return (
              <Todo key={todo._id}
              todo={todo}
              />
            )
          })
        }
      </ul>
    </atticle>
  );
};

export default Todos;
