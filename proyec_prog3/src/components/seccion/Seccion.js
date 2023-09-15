import React, {Component} from "react"
import Pelicula from '../pelicula/Pelicula';
import PeliculaEstreno from '../peliculaEstreno/PeliculaEstreno';
import "../seccion/Seccion.css"
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

class Seccion extends Component {
    constructor() {
      super();
      this.state = {
        pelicula: [],
        peliculaEstreno: [],
        isLoading: true,
      };
    }

    componentDidMount(){
        console.log("entra bien")
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=75196a6b12119e0621f7373e3de1a94a")
        .then(res => res.json())
        .then(data => {
        console.log(data);
        this.setState({
          pelicula: data.results.slice(0, 5)
        });

        // Oculta el loader después de 3 segundos
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 3000);
      })
      .catch(errors => console.log("Estos son los errores" + errors));
            
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
                <React.Fragment>{this.state.isLoading ? (
                    <Loader/>
                ) : (
                    <React.Fragment>
                     <main className="">
                        <h2 className="barras"> Peliculas mas populares:</h2>
                        <button>
                            <Link to = "/populares" className='menulink1'>Ver todas</Link>
                        </button>
                        <section className="peliculaspop"> 
                            {this.state.pelicula.map((elem,idx)=> <Pelicula key= {elem + idx} datospelicula={elem} />)}
                        </section>

                        <h2 className="barras"> Proximas peliculas en el cine:</h2>
                        <button>
                            <Link to = "/estrenos" className='menulink1'>Ver todas</Link>
                        </button>
                        <section className="peliculaspop">
                        {this.state.peliculaEstreno.map((elem,idx)=> <PeliculaEstreno key= {elem + idx} datospelicula={elem}/>)}

                        </section>
                    </main>   
                    </React.Fragment>
                    
                )} </React.Fragment>
                     
            )
        }
    }
    
export default Seccion

