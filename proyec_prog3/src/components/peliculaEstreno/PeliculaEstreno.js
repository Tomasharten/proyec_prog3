import React, { Component } from 'react'
import {Link} from 'react-router-dom' 
import "../peliculaEstreno/PeliculaEstreno.css"

class PeliculaEstreno extends Component {

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
        <React.Fragment>
              <br></br>
                  <div className= "borde" href="">
                      <article className="pelicula">
                          <img className="imagenport" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                          <div className= "titaño">
                              <h3 className ="titulos">{title}</h3>
                              <h3 className="fecha"></h3>
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
                          </div>
                      
                      </article>
                  </div>
        
        </React.Fragment>
        )
  }
}

export default PeliculaEstreno