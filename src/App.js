//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { TodoCounter } from "./Componentes/TodoCounter/Todo-Counter";
import { TodoItem } from "./Componentes/TodoItem/Todo-Item";
import { TodoList } from "./Componentes/TodoList/TodoList";
import { TodoSearch } from "./Componentes/TodoSearch/TodoSearch";
import { CreateToDoButton } from "./Componentes/CreateTodoButton/CreateTodoButton";

const todos =[

    {text:'comprar cebolla', completed: false},
    {text:'hacer todos', completed: false},
    {text:'Estudiar usuarios', completed: false},
];

function App(props) {
    return ( 
        <React.Fragment>
        <TodoCounter />
        
        <TodoSearch />
        
            <TodoList>
                {todos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text}/>
                ))}
                
            </TodoList>
        <CreateToDoButton/>
        
        </React.Fragment> 
    );
}

export default App;