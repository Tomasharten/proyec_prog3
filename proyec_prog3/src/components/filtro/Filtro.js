import React, {Component} from "react";

class Filtro extends Component{
    constructor(props){
        super(props);
        this.state={
            valor:""
        }
    }

    controlarCambios(event){
        this.setState({
            valor:event.target.value
        }, 
        () => this.props.filtrar(this.state.valor))
    }
    evitarSubmit(event){
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <form action="" className="" method="get" onSubmit={(event)=> this.evitarSubmit(event)}>
                <input type="text" value={this.state.valor} onChange={(event) => this.controlarCambios(event)}></input>
                <button type='submit'>Filtrar</button>
                </form>
            </div>
        )
    }

}
export default Filtro