
import React from "react";
import './Todo-Counter.css';

function TodoCounter(props){
    return(
    <h2 className="todo-Counter"> Saludo al Calvo{props.text}</h2>
    );
}
export {TodoCounter};