
import React from "react";
import './Todo-Counter.css';

function TodoCounter({TodosTotal,completedTodos}){
    
    
    return(

    <h2 className="todo-Counter"
    > Aca se muestran los todos totales {TodosTotal} y los completados {completedTodos}</h2>
    );
}
export {TodoCounter};