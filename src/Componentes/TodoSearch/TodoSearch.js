
import React from "react";
import './TodoSearch.css';


function TodoSearch(props){
    return(
    <form className="searchBar-Container">
        <input className="TodoSearch" placeholder="Hola"/>
        <span>{props.text}</span>
        <button className="SearchButton">Buscar</button>
    </form>
    );
}
export {TodoSearch};