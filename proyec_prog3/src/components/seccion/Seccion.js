import React, {Component} from "react"

class Seccion extends Component {
    constructor(){
        super();
        this.state={
            ///cosas
        }
    }
    componentDidMount(){
        console.log("Aca estamos")
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1")
        .then(res=>res.json())
        .then(data=> this.setState({
            ///cosas de las cosas
        }))
        .catch(erorres=>console.log("Estos son los errores"+ erorres))
    }
    componentDidUpdate(){

    }
    render(){
        return(
            <section>
                


            </section>
        )
    }
}