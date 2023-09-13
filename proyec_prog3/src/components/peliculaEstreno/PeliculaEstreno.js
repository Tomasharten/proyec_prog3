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
              <section className="peliculaspop">
                      <article className="pelicula">
                          <img className="imagenport" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                          <div className= "titaño">
                              <h3 className ="titulos">{title}</h3>
                              <h3 className="fecha"></h3>
                              <button className='botonP' >
                                  <Link to={`/detalle/${id}`} className="" >Detalle</Link>
                              </button>
                            {
                              this.state.ver === false?
                              <button className='botonP' onClick={()=> this.verMas()}>Ver más</button>
                              
                              :
                              <>
                              <p>{overview}</p>
                              <button className='botonP' onClick={()=> this.verMenos()}> Ver menos </button>
                              
                              </>
                            }
                          </div>
                      
                      </article>
                 </section>

        
        </React.Fragment>
        )
  }
}

export default PeliculaEstreno