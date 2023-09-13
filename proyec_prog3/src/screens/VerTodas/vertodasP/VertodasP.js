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
        fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc ")
        .then(res=> res.json())
        .then(data => this.setState({
            peliculas: data.results, 
        }))
     }
     render(){
        return(
            <React.Fragment>
    
                    <h2 className="barras"> Proximas peliculas en el cine:</h2>
    
                    <section className="peliculaspop">
                    {this.state.peliculas.map((elem,idx)=> <Pelicula key= {elem + idx} datospelicula={elem}/>)}
    
                    </section>
    
            </React.Fragment>
        )
    }

}
export default VertodasP
