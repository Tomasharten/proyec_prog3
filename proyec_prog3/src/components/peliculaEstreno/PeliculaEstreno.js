import React, { Component } from 'react'
import {Link} from 'react-router-dom' 
import "../peliculaEstreno/PeliculaEstreno.css"

class PeliculaEstreno extends Component {

  constructor(props){
      super(props)
      this.state = {
          ver : false,
          props:props,
          textoBoton: "Agregar a favoritos"
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

  componentDidMount(){
    //Chequea si el id esta en el array de favoritos y cambiarle el botón si ya está.  
    let recuperoStorage = localStorage.getItem("favoritos")
    if (recuperoStorage !== null) {
        let favoritos = JSON.parse(recuperoStorage);
        if (favoritos.includes(this.props.datospelicula.id)){
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }
    }
    //Si esta, cambiar el texto del botón
  }
    agregarYSacarDeFavs(id) {
        //Guardo en un array 
        let favoritos = []
        //guardo en local storage
        let recuperoStorage= localStorage.getItem("favoritos")
      
        if (recuperoStorage !== null){
         favoritos= JSON.parse(recuperoStorage)
        }
        if (favoritos.includes(id)){
            //si el array esta tengo que sacarlo del array
          favoritos= favoritos.filter(unId => unId!==id) 
          this.setState({
            textoBoton: "Agregar a favortios"
          })           
        }else{
            // si el array no esta
            favoritos.push(id)
            this.setState({
              textoBoton: "Quitar de favortios"
            })
        }
        let favtoString= JSON.stringify(favoritos)
        localStorage.setItem("favoritos", favtoString)

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
                              <button type="button" onClick={()=> this.agregarYSacarDeFavs(this.props.datospelicula.id)} className="botonP"> {this.state.textoBoton} </button>            

                          </div>
                      
                      </article>
                 </section>

        
        </React.Fragment>
        )
  }
}

export default PeliculaEstreno