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
        console.log("Aca estamos")
        fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc ")
            .then(res=>res.json())
            .then(data=> this.setState({
                pelicula: data.results.data.slice(0,5), 
            }))
            .catch(erorres=>console.log("Estos son los errores"+ erorres))
        fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2%7C3&release_date.gte=%7Bmin_date%7D&release_date.lte=%7Bmax_date%7D%27  ")
            .then(res=>res.json())
            .then(data=> this.setState({
                peliculaEstreno: data.results.data.slice(0,5), 
            }))
            .catch(erorres=>console.log("Estos son los errores"+ erorres))

        };
    componentDidUpdate(){}
        render(){
            return(
  
                        <main class="container">
                        <h2 class="titulo"> <em>Peliculas mas populares:</em></h2>

                        <section class="cards"> 
                            {this.state.pelicula.map((elem,idx)=> <Pelicula key= {idx} nombre={elem.title} imagen={elem.poster_path} fecha={elem.release_date} id={elem.id}/>)}
                        </section>

                        <h2 class="titulo2y3"> <em>Proximas peliculas en el cine:</em></h2>

                        <section class="cards2">
                        {this.state.peliculaEstreno.map((elem,idx)=> <PeliculaEstreno key= {idx} nombre={elem.title} imagen={elem.poster_path} fecha={elem.release_date} id={elem.id}/>)}

                        </section>
                    </main>
            )
        }
    }
    

export default Seccion

