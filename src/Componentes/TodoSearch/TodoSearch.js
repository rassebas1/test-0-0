
import React from "react";
import './TodoSearch.css';


function TodoSearch({searchValue,setSearchValue}){

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
      };
    
    return(
    <form className="searchBar-Container">
        <input className="TodoSearch" placeholder="Hola"
        value={searchValue}
        onChange={onSearchValueChange} />
        <span>{searchValue}</span>
        <button className="CreateTodo-Button">Nuevo</button>
    </form>
    );
}
export {TodoSearch};