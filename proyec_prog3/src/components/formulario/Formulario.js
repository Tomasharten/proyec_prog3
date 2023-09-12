import React, {Component} from 'react'
import { Link } from "react-router-dom";
class Formulario extends Component {
    constructor (props){
        super (props); 
        this.state= {
            valor: "",
            resultados:[]}

    }
    evitarSumbit (event) {
        event.preventDefault();
    }
    
    controlarCambios(event) { 
        this.setState({
            valor: event.target.value
        })
    }
    render(){
        return(
            <li> <form onSumbit= {(event)=> this.evitarSumbit(event)} className="formulario">
                    <input type="text" onChange= {(event)=> this.controlarCambios(event)} value= {this.state.valor} name="valor"placeholder='Buscar:' class="buscador"/>
                    <Link to={`/valor/${this.state.valor}`}></Link>
                    <input type= "submit" value="Submit"/>
                </form>
            </li>)
    }
}
export default Formulario