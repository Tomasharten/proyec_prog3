import React, { Component } from 'react'
import '../Resultados/Resultados.css'
import Pelicula from '../../components/pelicula/Pelicula'
///import Pelicula from '../../components/Pelicula/Pelicula';

class Resultados extends Component {
    constructor(){
        super()
        this.state={
            resultados:[]
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.search}&api_key=75196a6b12119e0621f7373e3de1a94a`)
        .then (res=> res.json())
        .then(data=> this.setState({
            resultados: data.results,
        }))
        .catch(erorres=>console.log("Estos son los errores"+ erorres)) 
    }
    render(){
        return(
            <React.Fragment>
                <h2 className= "barras"> RESULTADO DE BUSQUEDA: </h2>


            {
                this.state.resultados.length!== 0 ?
                
            <React.Fragment>
                    <section className="peliculaspop">
                                {this.state.resultados.map((elem,idx)=><Pelicula key={elem=idx} datospelicula={elem}/>)}
                    </section>
            </React.Fragment>
            :
            <>
            <React.Fragment>
                <h1>No hay resultados de tu busqueda:{this.props.match.params.search}</h1>
            </React.Fragment>
            </>
        }
                </React.Fragment>

        )
    } 
}
export default Resultados