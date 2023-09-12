import React, {Component} from "react";

class Filtro extends Component{
    constructor(props){
        super(props);
        this.state={
            valor:""
        }
    }
    evitarSubmit(event){
        event.preventDefault()
    }
    controlarCambios(event){
        this.setState({
            valor:event.target.value
        }, 
        () => this.props.filtrar(this.state.valor))
        return true 
    }
    render(){
        return(
            <div>
                <form action="" className="" method="get" onSubmit={(event)=> this.evitarSubmit(event)}>
                <label>Buscador:</label>
                <input type="text" value={this.state.valor} onChange={(event) => this.controlarCambios(event)}></input>
                <input type="submit" value='Submit'> </input>
                </form>
            </div>
        )
    }

}
export default Filtro