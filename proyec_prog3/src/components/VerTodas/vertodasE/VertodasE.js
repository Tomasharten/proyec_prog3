import './VertodasE.css'
import React, {Component} from 'react'; 
import PeliculaEstreno from '../../../components/peliculaEstreno/PeliculaEstreno';
import Filtro from '../../filtro/Filtro'

class VertodasE extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculasestreno:[]
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
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=75196a6b12119e0621f7373e3de1a94a")
        .then(res=>res.json())
        .then(data=> this.setState({
            peliculasestreno: data.results 
        }))
        .catch(erorres=>console.log("Estos son los errores"+ erorres))
    }
    peliculaFiltroE(textoFiltro){
        let filtroPeliculaE = this.state.peliculasestreno.filter((datos)=>datos.title.toLowerCase().includes(textoFiltro.toLowerCase()))
        this.setState({
            peliculasestreno: filtroPeliculaE,
        })
    }
render(){
    return(
        <React.Fragment>
                    <h2 className="barras"> Proximos estrenos: </h2>
                    <Filtro filtrar={(textoFiltro) => this.peliculaFiltroE(textoFiltro)} />
                    <section className="peliculaspop">
                    
                        {
                            this.state.cargar === true?
                            
                            <React.Fragment>
                                <section className="peliculaspop">
                                    {this.state.peliculasestreno.map((elem,idx)=> <PeliculaEstreno key= {elem + idx} datospelicula={elem}/>)}
                                </section>
                                <button className='botonP' onClick={()=> this.cargarMenos()}>Mostrar menos</button>
                            </React.Fragment>
                            :
                            <>
                            <React.Fragment>
                            
                                <section className="peliculaspop">
                                    {this.state.peliculasestreno.slice(0,9).map((elem,idx)=> <PeliculaEstreno key= {elem + idx} datospelicula={elem}/>)}
                                </section>
                                <button className='botonP' onClick={()=> this.cargarMas()}>Mostrar más</button>
                            </React.Fragment>
                            </>
                        }
                    
                </section>
            </React.Fragment>
    )
}
}
export default VertodasE