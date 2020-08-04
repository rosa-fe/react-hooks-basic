import React, { useState } from "react";
import "./App.scss";
import ToDo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Thao" },
    { id: 2, title: "FE" },
    { id: 3, title: "React" },
  ]);

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
      <h2>React hooks - todo list</h2>
      <TodoForm onSubmit={onSubmit} />
      {/* <ColorBox /> */}
      <ToDo todos={todoList} onTodoClick={clickTodo} />
    </div>
  );
}

export default App;
