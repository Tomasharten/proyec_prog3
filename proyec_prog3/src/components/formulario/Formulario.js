import React, {Component} from 'react'

class Formulario extends Component {
    constructor (props){
        super (props); 
        this.state= {valor: ""}

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
            <li> <form onSumbit= {(event)=> this.evitarSumbit(event)} class="formulario">
                    <input type="text" onChange= {(event)=> this.controlarCambios(event)} value= {this.state.valor} class="buscador"/>
                    <input type= "submit" value="Submit"/>
                </form>
            </li>)
    }
}
export default Formulario