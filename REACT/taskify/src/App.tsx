import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/inputField";
import { Todo } from "./model";

const App: React.FC = () => {

const [todo, setTodo] = useState<string>('');

// This is how you create an array of a type or an interface.
const [todos, setTodos] = useState<Todo[]>([]);

const handleAdd = (event: React.FormEvent) => {
  event.preventDefault();

  if(todo){
    setTodos([...todos,{id:Date.now(), todo, isDone: false}]);
    setTodo("");
  }

}

console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {/* <TodoList /> */}
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
