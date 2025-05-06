import React, { useState } from "react";

function AddNote({ setTodos, todos }) {
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    if (!todo) return;
    let updateTodo = [
      ...todos,
      {
        id: new Date().getTime(),
        tast: todo,
        compeleted: false,
      },
    ];
    setTodos(updateTodo);
    setTodo("");
  };
  return (
    <div>
      <label htmlFor="todo">Todo</label>
      <input id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default AddNote;
