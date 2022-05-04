

import React from "react";
import { useState } from "react";

import "./TodoSearch.css";

function TodoSearch() {
  const [placeholder] = useState("Notranslation");
  const [searchValue, setSearchValue] = useState("");
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  
  return (
    <form className="search-bar__container">
      <input
        className="todo-search"
        placeholder={placeholder}
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <span>{searchValue}</span>
      <button className="create-todo__button">Nuevo</button>
    </form>
  );
}
export { TodoSearch };
