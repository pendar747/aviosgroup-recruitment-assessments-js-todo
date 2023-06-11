import React from "react";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <div className="container p-md-5">
        <div className="d-flex flex-column justify-content-center">
          <h1>Todo List</h1>
          <TodoList />
          <AddTodo />
        </div>
      </div>
    </div>
  );
}
