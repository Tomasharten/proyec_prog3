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
            <section className="contenedorpadre">
            <div className="cajagrande">
                {this.state.pelicula !==""?
                <>
                    <img className="imgpelicula" src={this.state.pelicula.poster_path} alt=''/>
                    <div className="contenedorpadre2">
                        <h2 className="titulo" >{this.state.title}</h2> 
                        <p className="calificacion"> {this.state.vote_average}</p>
                        <p className="fecha"> {this.state.release_date}</p>
                        <p className="genero">{this.state.genres} </p>
                        <p className="duracion"> {this.state.runtime}</p>
                        <p className="sinposis"> {this.state.overview}</p>

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