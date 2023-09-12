import React, {Component} from "react"
import Pelicula from "../pelicula/Pelicula"
import Filtro from "../filtro/Filtro"

class VertodasP extends Component{
     constructor(){
        super();
        this.state={
            peliculas: " ",
            index:0

        }
     }
     componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc ")
        .then(res=> res.json())
        .then(data => this.setState({
            peliculas: data.peliculas.data, 
            
        }))
     }



}
