import React, { Component } from 'react'
import {Link} from 'react-router-dom' 

class Pelicula extends Component {

  constructor(props){
      super(props)
      this.state = {
          ver : false,
          props:props
      }
  }
  
  verMas(){
    this.setState({
        ver : true
    })
  }

  verMenos(){
    this.setState({
        ver:false
    })
  }

  render() {

    let {poster_path, title, overview, id} = this.props.datospelicula
   
      return (

              <article  className='portadaCard'>
              
              <img className= "portada"src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/> 
              <h2>{title}</h2>
              
              {/* <button className="" onClick={()=>this.props.favorito(this.props.pelicula)}>Favoritos</button> */}
              <button className='' >
                    <Link to={`/detalle/${id}`} className="btn btn-warning" >Detalle</Link>
              </button>
              {
                this.state.ver === false?
                <button className='' onClick={()=> this.verMas()}>Ver más</button>
                
                :
                <>
                <p>{overview}</p>
                <button className='' onClick={()=> this.verMenos()}> Ver menos </button>
                
                </>
              }

              </article>
          
      )
  }
}

export default Pelicula