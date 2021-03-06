import React, { useState, useCallback } from "react";
import "./App.scss";
import ToDo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Clock from "./components/Clock";
import CustomClock from "./components/hooks";
import BetterClock from "./components/BetterClock";
import MagicColor from "./components/MagicColor";
import Demo from "./components/reactMemo/Demo";

function App() {
  const [count, setCount] = useState(0);
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

      {/* <h1>React hooks clock</h1> */}
      {/* {showClock && <Clock />}
      <button onClick={() => setshowClock(false)}>Hide Clock</button> */}
      {/* <CustomClock />
      <BetterClock />

      <h1>Magic color</h1>
      <MagicColor /> */}

      <div>React memo</div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Demo
        name={count}
        onClick={
          // useCallback(
          () => {
            console.log("aaa");
          }
          // , [])

          // return {};
        }
      />
    </div>
  );
}

export default App;
