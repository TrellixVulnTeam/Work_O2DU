import React from "react";
import TodoItem from "../todoItem/TodoItem";
const TodoList = ({ todos, remove }) => {
  if (!todos.length) {
    return (
      <h1 style={{ margin: "15px", color: "teal" }}>Todos doesnt found!</h1>
    );
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          remove={remove}
          todo={todo}
          key={todo.id}
          number={index + 1}
        />
      ))}
    </div>
  );
};

export default TodoList;
