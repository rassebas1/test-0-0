//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { TodoCounter } from "./Componentes/TodoCounter/Todo-Counter";
import { TodoItem } from "./Componentes/TodoItem/Todo-Item";
import { TodoList } from "./Componentes/TodoList/TodoList";
import { TodoSearch } from "./Componentes/TodoSearch/TodoSearch";
import { CreateToDoButton } from "./Componentes/CreateTodoButton/CreateTodoButton";
import logo from "./Componentes/logo192.png";

const defaultTodos = [
  {
    text: String,
    activeTodo: Boolean,
    contactInfo: String,
    profilePicture: String,
  },
  
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.activeTodo).length;
  const totalTodos = todos.length;
  let resultTodos = [];

  if (!(searchValue.length >= 1)) {
    resultTodos = todos;
  } else {
    resultTodos = todos.filter((todo) => {
      const searchText = searchValue.toLowerCase();
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completedTodoFunction = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].activeTodo = true;
    setTodos(newTodos);
    console.log("click");
  };
  const onDelete = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
    console.log("afuera");
  };

  return (
    <React.Fragment>
      <TodoCounter TodosTotal={totalTodos} completedTodos={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {resultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            profilePicture={todo.profilePicture}
            contactInfo={todo.contactInfo}
            text={todo.text}
            activeTodo={todo.activeTodo}
            onComplete={() => completedTodoFunction(todo.text)}
            onDelete={() => onDelete(todo.text)}
          />
        ))}
      </TodoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
