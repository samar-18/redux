import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toogleTask } from "./actions/todoActions";


const Todo = ({ todo }) => {
  const [updtatedTod, setUpdtatedTod] = useState(todo);
  const dispatch = useDispatch();
  return (
    <div className='all'>
      <div >
        <span
          style={{ textDecoration: todo.isDone ? "line-through" : "none" ,fontSize:"100%",fontVariant:"small-caps"}}
          onClick={() => dispatch(toogleTask(todo.id))}
        >
          {todo.desc}
        </span>
        <button className='butt6' onClick={() => dispatch(deleteTodo(todo.id))}>Del</button>
      </div>
      <div>
        <input
          value={updtatedTod.desc}
          onChange={(e) =>
            setUpdtatedTod({ ...updtatedTod, desc: e.target.value })
          }
        ></input>
        <button className='butt5' onClick={()=>dispatch(editTodo(updtatedTod))}>update</button>
      </div>
    </div>
  );
};

export default Todo;
