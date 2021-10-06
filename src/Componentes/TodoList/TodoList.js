import React from "react";
import './TodoList.css'

function TodoList(props){
    return(
    <section className="Todolist-Container">
        <ul className="TodoList">
            {props.children}
        </ul>
    </section>

    
    );
}
export {TodoList};