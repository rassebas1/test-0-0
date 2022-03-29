import React from "react";
import "./Todo-Item.css";

function TodoItem(props) {
  

  return (
    <ul className="todoContainer">
      <li className="profilePicture">
        {props.profilePicture}
      </li>
      <li className="contactInfo">{props.contactInfo}</li>
      <li
        className={`TodoItem-p ${props.activeTodo && "TodoItem-p--complete"}`}
      >
        {props.text}
      </li>
      <li className="actions" onClick={() => props.onComplete(props.text)}>
        iconos
      </li>
      <li className="eliminar" onClick={()=>props.onDelete(props.text)}>
        borrar
      </li>
    </ul>
  );
}
export { TodoItem };
