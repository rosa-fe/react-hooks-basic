import React, { useState } from "react";
import PropTypes from "prop-types";

ToDo.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};
ToDo.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function ToDo(props) {
  const { todos, onTodoClick } = props;
  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li onClick={() => handleClick(todo)} key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default ToDo;
