import React, { Component } from 'react'
import {Link} from 'react-router-dom' 
import '../pelicula/Pelicula.css'

class Pelicula extends Component {

  constructor(props){
      super(props)
      this.state = {
          ver : false,
          props:props, 
          textoBoton:"Agregar a favoritos", 
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
        let favtoString= JSON.stringify(favoritos)
        localStorage.setItem("favoritos", favtoString)

        // if (recuperoStorage !== null){
        //     favoritos=recuperoStorage
        // }
        // if (favoritos.includes(this.props.datospelicula.id)){
        //     //si el array esta tengo que sacarlo del array
        //     favoritos.filter(id)
        // }else{
        //     // si el array no esta
        //     favoritos.push(id)
        // }
        // Hago que cambie el botón
        this.setState({
            textoBoton:"Quitar de favoritos"
        })
    }


  render() {

    let {poster_path, title, overview, id} = this.props.datospelicula
   
      return (
        <React.Fragment>
              <section className="peliculaspop">
                      <article className="pelicula">
                          <img className="imagenport" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                          <div className= "titaño">
                              <h3 className ="titulos">{title}</h3>
                              <h3 className="fechas">{this.props.datospelicula.release_date}</h3>
                              <button className='botonP' >
                                  <Link to={`/detalle/${id}`} className="btn btn-warning" >Detalle</Link>
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

export default Pelicula