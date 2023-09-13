import React, {Component} from "react"
import Pelicula from "../../../components/pelicula/Pelicula"
// import Filtro from "../filtro/Filtro"
import './VertodasP.css'

class VertodasP extends Component{
     constructor(){
        super();
        this.state={
            peliculas: []
        }
     }
     componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=75196a6b12119e0621f7373e3de1a94a ")
        .then(res=> res.json())
        .then(data => this.setState({
            peliculas: data.results, 
        }))
     }
     render(){
        return(
            <React.Fragment>
    
                    <h2 className="barras"> Todas las peliculas populares: </h2>
    
                    <section className="peliculaspop">
                        {this.state.peliculas.slice(0,20).map((elem,idx)=> <Pelicula key= {elem + idx} datospelicula={elem}/>)}
                    </section>
    
            </React.Fragment>
        )
    }

}
export default VertodasP
