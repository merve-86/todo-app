import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./index.css"



function App() {

  const initialTodos = () => {
    return localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
  }


  const [todos, setTodos] = useState(initialTodos)

  return (
    <div className="App">
      <Header todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
