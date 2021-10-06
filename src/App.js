//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { TodoCounter } from "./Componentes/TodoCounter/Todo-Counter";
import { TodoItem } from "./Componentes/TodoItem/Todo-Item";
import { TodoList } from "./Componentes/TodoList/TodoList";
import { TodoSearch } from "./Componentes/TodoSearch/TodoSearch";
import { CreateToDoButton } from "./Componentes/CreateTodoButton/CreateTodoButton";
import logo from "./Componentes/logo192.png"

const defaultTodos =[

    {text:'comprar cebolla', activeTodo: false, contactInfo:"email1", 
    profilePicture:"imagen1"},
    {text:'acabar la pag', activeTodo: false, contactInfo:"email2",
    profilePicture:"imagen2"},
    {text:'peguelo', activeTodo: false, contactInfo:"email3",
    profilePicture:"imagen3"},
    {text:'dormir', activeTodo: true, contactInfo:"email4",
    profilePicture:"imagen4"},
];

function App() {
    const [todos, setTodos]=React.useState(defaultTodos)

    const [searchValue, setSearchValue]=React.useState('');
    const completedTodos= todos.filter(todo =>!!todo.activeTodo).length;
    const totalTodos=todos.length;
    let resultTodos=[];

    if(!(searchValue.length >= 1)){
        resultTodos= todos;
    }
    else{
        resultTodos=todos.filter(todo => {
        const searchText = searchValue.toLowerCase();
        const todoText= todo.text.toLowerCase();
        return todoText.includes(searchText)
    });
    }

    return ( 
        <React.Fragment>
        <TodoCounter
        TodosTotal= {totalTodos} 
        completedTodos= {completedTodos}/>
        
        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
         />
        
            <TodoList>
                {resultTodos.map(todo => (
                    <TodoItem 
                    key={todo.text}
                    profilePicture={todo.profilePicture}
                    contactInfo={todo.contactInfo} 
                    text={todo.text}
                    activeTodo={todo.activeTodo}
                    />
                ))}
                
            </TodoList>
        <CreateToDoButton/>
        
        </React.Fragment> 
    );
}

export default App;