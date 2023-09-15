import React, {Component} from "react"
import Pelicula from "../../../components/pelicula/Pelicula"
// import Filtro from "../filtro/Filtro"
import './VertodasP.css'
import Filtro from '../../filtro/Filtro'
import Loader from "../../loader/Loader"

class VertodasP extends Component{
     constructor(){
        super();
        this.state={
            peliculas: [],
            isLoading : true
        }
     }
     cargarMas(){
        this.setState({
            cargar : true
        })
      }
      cargarMenos(){
        this.setState({
            cargar:false
        })
      }
     componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=75196a6b12119e0621f7373e3de1a94a ")
        .then(res=> res.json())
        .then(data => {this.setState({
            peliculas: data.results});
            setTimeout(() => {
                this.setState({ isLoading: false });
              }, 3000);
            })
        .catch(e=>("este es el error " + e))
        }  
     peliculaFiltro(textoFiltro){
        let filtroPelicula = this.state.peliculas.filter((datos)=>datos.title.toLowerCase().includes(textoFiltro.toLowerCase()))
        this.setState({
            peliculas: filtroPelicula
        })
  
    }
  
     render(){
        return(
            <React.Fragment>
                    
                    {this.state.isLoading ? (
                        <Loader/>
                    )
                :(
                    <React.Fragment>
                <h2 className="barras"> Todas las peliculas populares: </h2>

                <Filtro filtrar={(textoFiltro) => this.peliculaFiltro(textoFiltro)} />
                <section className="peliculaspop">
                        {
                            this.state.cargar === true?
                            
                            <React.Fragment>
                                <section className="peliculaspop">
                                    {this.state.peliculas.map((elem,idx)=> <Pelicula key= {elem + idx} datospelicula={elem}/>)}
                                </section>
                                <button className='botonP' onClick={()=> this.cargarMenos()}>Mostrar menos</button>
                            </React.Fragment>
                            :
                            <>
                            <React.Fragment>
                            
                                <section className="peliculaspop">
                                    {this.state.peliculas.slice(0,9).map((elem,idx)=> <Pelicula key= {elem + idx} datospelicula={elem}/>)}
                                </section>
                                <button className='botonP' onClick={()=> this.cargarMas()}>Mostrar más</button>
                            </React.Fragment>
                            </>
                        }
                    
                </section>
                </React.Fragment>)}
                    
            </React.Fragment>
        )
    }

}
export default VertodasP
