import React, {Component} from "react";
import '../Detalles/Detalles.css'


class DetallesPeli extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            pelicula:"",
            props:props
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=75196a6b12119e0621f7373e3de1a94a`)   
        .then(res=>res.json())
        .then(data=>{console.log(data);
        this.setState({
            pelicula:data,
        })
        }
            
            )
        .catch(erorres=>console.log("Estos son los errores"+ erorres))
    }

    render(){
        return(
            
            <section className="contenedorpadre">
            <div className="cajagrande">
                {this.state.pelicula !==""?
                <>
                    <img className="imgpelicula" src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`}alt='por favor loco aparece'/>
                    <div className="contenedorpadre2">
                        <h2 className="titulo" >{this.state.pelicula.original_title}</h2> 
                        <p className="calificacion"> Calificación: {this.state.pelicula.vote_average}</p>
                        <p className="fecha"> Fecha de estreno: {this.state.pelicula.release_date}</p>
                        <p className="genero">Género: {this.state.pelicula.genres[0].name} </p>
                        <p className="duracion"> Duración: {this.state.pelicula.runtime}</p>
                        <p className="sinposis"> Sinopsis: {this.state.pelicula.overview}</p>

                        {/* <a className="botonFavs" href="">Agregar a favoritos</a>
                        <form action="" method=" GET">
                            <input type="radio" name="Favoritos" value="Agregar a favoritos" className="circuloFavoritos"/> 
                            <label className="favoritos"> Agregar a favoritos</label>
                            <a href="favorite.html"></a>
                        </form> */}
                    </div> 
                </>:
                <h1>Cargando...</h1>
                }
            </div>  
            </section>
        )
    }
}

export default DetallesPeli