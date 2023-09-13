import React, { Component } from 'react'
import {Link} from 'react-router-dom' 
import '../pelicula/Pelicula.css'

class Pelicula extends Component {

  constructor(props){
      super(props)
      this.state = {
          ver : false,
          props:props, 
          favortios:false, 
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
//   componentDidMount(){
//     let recuperoStorage = localStorage.getItem ("favoritos");
//     if (recuperoStorage !== null) {
//         let favoritos = JSON.parse (recuperoStorage);
//         console.log(favoritos.includes(this.props.datospelicula.id));
//         if (favoritos.includes(this.props.datospelicula.id)){
//           this.setState ({
//               favoritos: true
//           })
// }
//       }
 
//   }
//   agregarYSacarDeFavs (id){
//     let favoritos = [];
//     let recuperoStorage = localStorage.getItem ("favoritos");

//     if (recuperoStorage !== null) {  
//         favoritos = JSON.parse(recuperoStorage);
//     }

//     if (favoritos.includes (id)){ 
//         favoritos = favoritos.filter (unId => unId !== id )
//         this.setState ({
//             favoritos: false
//         })

//      } else {
//         favoritos.push (id);
//         this.setState ({
//             favoritos: true,
//         })
//      }


//     let favoritostoString= JSON.stringify(favoritos);
//     localStorage.setItem ("favoritos", favoritostoString);

//   }

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
                            {
                              this.state.favortios ===false?
                                <button onClick={()=> this.agregarYSacarDeFavs(this.props.datospelicula.id)} type="button" className="botonP"> Agregar a fav </button>
                              
                              :
                              <>
                                <button onClick={()=> this.agregarYSacarDeFavs(this.props.datospelicula.id)} type="button" className="botonP"> Quitar de fav </button>
                              </>
                            }
                            
                          </div>
                      
                      </article>
        </section>

        </React.Fragment>
        )
  }
}

export default Pelicula