import React, { Component } from 'react'
import {Link} from 'react-router-dom' 

export default class Pelicula extends Component {

  constructor(props){
      super(props)
      this.state = {
          boton: '',
          ver : true
      }
  }

  render() {

    let {poster_path, title, overview, id} = this.props.pelicula
   
      return (
          <>
              <article  className='portadaCard'>
              
              <img class= "portada"src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title}/> 
              <h2>{title}</h2>
              <button className="" onClick={()=>this.props.favorito(this.props.pelicula)}>Favoritos</button>
              <Link to={`/detallePelicula/id/${id}`} className="btn btn-warning" >Detalle</Link>

              </article>
          </>
      )
  }
}