import './VertodasE.css'
import React, {Component} from 'react'; 
import PeliculaEstreno from '../../../components/peliculaEstreno/PeliculaEstreno';

class VertodasE extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculasestreno:[]
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=75196a6b12119e0621f7373e3de1a94a")
        .then(res=>res.json())
        .then(data=> this.setState({
            peliculaestreno: data.results 
        }))
        .catch(erorres=>console.log("Estos son los errores"+ erorres))
    }
render(){
    return(
        <React.Fragment>

                <h2 className="barras"> Proximas peliculas en el cine:</h2>

                <section className="peliculaspop">
                {this.state.peliculasestreno.map((elem,idx)=> <PeliculaEstreno key= {elem + idx} datospelicula={elem}/>)}

                </section>

        </React.Fragment>
    )
}
}
export default VertodasE