import React, {Component} from "react";

class DetallesPeli extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id,
            pelicula:"",
            props:props
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=75196a6b12119e0621f7373e3de1a94a`)   
        .then(res=>res.json())
        .then(data=>this.setState({
            pelicula:data,
        }))
        .catch(erorres=>console.log("Estos son los errores"+ erorres))
    }

    render(){
        return(
            <section class="contenedorpadre">
            <div class="cajagrande">
                {this.state.pelicula !==""?
                <>
                    <img class="imgpelicula" src={this.state.pelicula.poster_path} alt=''/>
                    <div class="contenedorpadre2">
                        <h2 class="titulo" >{this.state.title}</h2> 
                        <p class="calificacion"> {this.state.vote_average}</p>
                        <p class="fecha"> {this.state.release_date}</p>
                        <p class="genero">{this.state.genres} </p>
                        <p class="duracion"> {this.state.runtime}</p>
                        <p class="sinposis"> {this.state.overview}</p>

                        {/* <a class="botonFavs" href="">Agregar a favoritos</a>
                        <form action="" method=" GET">
                            <input type="radio" name="Favoritos" value="Agregar a favoritos" class="circuloFavoritos"/> 
                            <label class="favoritos"> Agregar a favoritos</label>
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