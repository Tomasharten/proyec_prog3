import React, {Component} from "react"
import Pelicula from '../pelicula/Pelicula';
import PeliculaEstreno from '../peliculaEstreno/PeliculaEstreno';
import "../seccion/Seccion.css"

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
            .then(data => {
                console.log(data); 
                this.setState({
                    pelicula: data.results.slice(0, 5)
                })
                console.log(data.results.slice(0,5))
            
            })   
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
                        <main className="">
                        <h2 className="barras"> Peliculas mas populares:</h2>

                        <section className="peliculaspop"> 
                            {this.state.pelicula.map((elem,idx)=> <Pelicula key= {elem + idx} datospelicula={elem} />)}
                        </section>

                        <h2 className="barras"> Proximas peliculas en el cine:</h2>

                        <section className="peliculaspop">
                        {this.state.peliculaEstreno.map((elem,idx)=> <PeliculaEstreno key= {elem + idx} datospelicula={elem}/>)}

                        </section>
                    </main>
            )
        }
    }
    

export default Seccion

