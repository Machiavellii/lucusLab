import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <i
          className="fas fa-times"
          style={{
            cursor: "pointer",
            float: "right",
            color: "white",
            marginRight: "1rem",
            fontSize: "1rem",
          }}
          onClick={() => removeTodo(todo.id)}
        />
        <i
          className="fas fa-pencil-alt"
          style={{
            cursor: "pointer",
            float: "right",
            color: "white",
            fontSize: "1rem",
          }}
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
};

export default Todo;
