import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./actions/todoActions";
import TodoList from "./TodoList";
import { v4 } from "uuid";
import { toggleFilter } from "./actions/filterActions";
import './app.css';

const App = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({
    id: v4(),
    desc: "",
    isDone: false,
  });
  const filter = useSelector(state => state.filterReducer)
  console.log(filter)
  const todos = useSelector((state) => state.todoReducer);

  const handleSave = () => {
    dispatch(addTodo(newTodo));
    setNewTodo({
      id: v4(),
      desc: "",
      isDone: false,
    });
  };
  return (
    <div className='body'>
      <div className='butt'>
        <button className='butt1' onClick={()=>dispatch(toggleFilter(null))}>ALL</button>
        <button className='butt2' onClick={()=>dispatch(toggleFilter(true))}>DONE</button>
        <button className='butt3'  onClick={()=>dispatch(toggleFilter(false))}>UNDONE</button>
      </div>
      <div className='all' style={{display:"flex" }}>
        <input
          type="text"
          value={newTodo.desc}
          onChange={(e) => setNewTodo({ ...newTodo, desc: e.target.value })}
        ></input>{" "}
        <button className='butt2' onClick={handleSave}>ADD</button>
      </div>
      <TodoList todos={filter===null? todos:todos.filter(el=>el.isDone===filter)}></TodoList>
    </div>
  );
};


export default App;
