import React, { useState } from "react";
import "./App.scss";
import ToDo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Clock from "./components/Clock";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Thao" },
    { id: 2, title: "FE" },
    { id: 3, title: "React" },
  ]);
  const [showClock, setshowClock] = useState(true);

  function clickTodo(todo) {
    let index = todoList.findIndex((item) => item.id === todo.id);
    if (index < 0) return;

    let newTodo = [...todoList];
    newTodo.splice(index, 1);
    setTodoList(newTodo);
  }

  let onSubmit = (value) => {
    const newTodo = {
      id: todoList.length + 1,
      ...value,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);

    setTodoList(newTodoList);
  };
  return (
    <div className="app">
      {/* <h2>React hooks - Post list</h2>
      <PostList /> */}
      {/* <TodoForm onSubmit={onSubmit} /> */}
      {/* <ColorBox /> */}
      {/* <ToDo todos={todoList} onTodoClick={clickTodo} /> */}

      <h1>React hooks clock</h1>
      {showClock && <Clock />}
      <button onClick={() => setshowClock(false)}>Hide Clock</button>
    </div>
  );
}

export default App;
