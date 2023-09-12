import React from 'react';
import { Link } from "react-router-dom";
import '../header/Header.css'
function Header(){
    return(
        <header className= "header">
        <img className="logo" src="" alt="Logo"/> 
        <h1 className= "tit">POPCORN ON</h1> 
        <nav className="menu">
        <Link to = "/" className='menulink'>Home</Link>    |    <Link to = "/favoritos" className='menulink'>Favoritos</Link>   |   <Link to = "/populares" className='menulink'>Peliculas populares</Link>   |   <Link to = "/estrenos" className='menulink'>Proximos estrenos</Link>
        </nav>
    {/* <form action="./search-results.html" method="GET" class="input">
    <input type="search" name="busqueda" size="40" maxlength="40" placeholder="..." class="buscador">
    <p class="alert"></p>
        <input type="submit" value="Buscar" class="botonBuscador">
           </form> */}
        </header>
    )
}
export default Header;