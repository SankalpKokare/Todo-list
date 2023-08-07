import { useState } from "react";

function App() {
  const [newitem, setnewitem] = useState("");

  const [todo, settodo] = useState([]);
  function HandleSubmit(e) {
    e.preventDefault();
    settodo((prevTodo) => {
      const item = newitem;
      setnewitem("");

      return [
        ...prevTodo,
        { id: crypto.randomUUID(), title: item, completed: false },
      ];
    });
  }

  function deleteTodo(id) {
    settodo((prevtodo) => {
      return prevtodo.filter(todo => todo.id !== id)
    });
  }

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          value={newitem}
          onChange={(e) => setnewitem(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <h1>To Do List</h1>

      {todo.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>
              <input type="checkbox" />
              <label htmlFor="">{todo.title}</label>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
