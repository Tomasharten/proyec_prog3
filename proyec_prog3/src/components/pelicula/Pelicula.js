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

    let {poster_path, title, overview, id} = this.props
   
      return (

              <article  className='portadaCard'>
              
              <img class= "portada"src={poster_path} alt={title}/> 
              <h2>{title}</h2>
              <p>{overview}</p>
              {/* <button className="" onClick={()=>this.props.favorito(this.props.pelicula)}>Favoritos</button> */}
              <button className='' >
                    <Link to={`/detalle/${id}`} className="btn btn-warning" >Detalle</Link>
              </button>
              {
                this.state.ver == false?
                <button className='' onClick={()=> this.verMas()}>Ver más</button>
                :
                <>
                <button className='' onClick={()=> this.verMenos}> Ver menos </button>

                </>
              }
                
              </article>
          
      )
  }
}

export default Pelicula