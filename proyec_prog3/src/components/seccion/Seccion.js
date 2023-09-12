import React, {Component} from "react"
import Pelicula from '../pelicula/Pelicula';
import PeliculaEstreno from '../peliculaEstreno/PeliculaEstreno';

class Seccion extends Component {
    constructor(){
        super();
        this.state={
            pelicula: [],
            peliculaEstreno: []
        }
    }
    componentDidMount(){
        console.log("entra bien")
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=75196a6b12119e0621f7373e3de1a94a")
            .then(res=>res.json())
            .then(data=> this.setState({
                pelicula: data.results.slice(0,5) 
            }))
            .catch(erorres=>console.log("Estos son los errores"+ erorres))
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=75196a6b12119e0621f7373e3de1a94a")
            .then(res=>res.json())
            .then(data=> this.setState({
                peliculaEstreno: data.results.slice(0,5), 
            }))
            .catch(erorres=>console.log("Estos son los errores"+ erorres))
        // console.log(this.state.peliculaEstreno)
        // console.log(this.state.pelicula)
        };
    componentDidUpdate(){}
        render(){
            return(
                        <main className="container">
                        <h2 className="titulo"> <em>Peliculas mas populares:</em></h2>

                        <section className="cards"> 
                            {this.state.pelicula.map((elem,idx)=> <Pelicula key= {idx} nombre={elem.title} imagen={elem.poster_path} fecha={elem.release_date} id={elem.id}/>)}
                        </section>

                        <h2 className="titulo2y3"> <em>Proximas peliculas en el cine:</em></h2>

                        <section className="cards2">
                        {this.state.peliculaEstreno.map((elem,idx)=> <PeliculaEstreno key= {idx} nombre={elem.title} imagen={elem.poster_path} fecha={elem.release_date} id={elem.id}/>)}

                        </section>
                    </main>
            )
        }
    }
    

export default Seccion

