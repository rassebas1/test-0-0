import React from "react";
import "./Todo-Item.css";

function TodoItem(props) {
  const [todoStatus, setActiveTodo] = React.useState(props.activeTodo);

    const onDelete = () => {
    console.log("Cambio de Estado de " + props.text+" "+todoStatus);
    setActiveTodo(!todoStatus);
  };

  return (
    <ul className="todoContainer">
      <li className="profilePicture">
        {props.profilePicture}
      </li>
      <li className="contactInfo">{props.contactInfo}</li>
      <li
        className={`TodoItem-p ${todoStatus && "TodoItem-p--complete"}`}
      >
        {props.text}
      </li>
      <li className="actions" onClick={() => onDelete(!todoStatus)}>
        iconos
      </li>
    </ul>
  );
}
export { TodoItem };
