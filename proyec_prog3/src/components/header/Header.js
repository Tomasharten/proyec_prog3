import React from 'react';
import { Link } from "react-router-dom";
import '../header/Header.css'
import Formulario from '../formulario/Formulario';
function Header(){
    return(
        <header className= "header">
        <img className="logo" src="/logo.png" alt="Logo"/> 
        <h1 className= "tit">POPCORN ON</h1> 
        <nav className="menu">
        <Link to = "/" className='menulink'>Home</Link>    |    <Link to = "/favoritos" className='menulink'>Favoritos</Link>   |   <Link to = "/populares" className='menulink'>Peliculas populares</Link>   |   <Link to = "/estrenos" className='menulink'>Proximos estrenos</Link>
        </nav>
        <Formulario/>
        </header>
    )
}
export default Header;