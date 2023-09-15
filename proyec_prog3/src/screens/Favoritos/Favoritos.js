import '../Favoritos/Favoritos.css'
import React, { Component } from 'react';
import Pelicula from '../../components/pelicula/Pelicula';
import Loader from '../../components/loader/Loader';

class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favorito: [],
            isLoading: true
        }
    }
    componentDidMount() {
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')
        if (recuperoStorage !== null) {
            favoritos = JSON.parse(recuperoStorage)
        }
        favoritos.map((id) => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=75196a6b12119e0621f7373e3de1a94a`)
                .then((response) => response.json())
                .then((favorito) => {
                    let listaFavoritos = this.state.favorito;
                    listaFavoritos.push(favorito)
                    this.setState({
                        favorito: listaFavoritos
                    });
                    setTimeout(() => {
                        this.setState({ isLoading: false });
                    }, 3000);
                })
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.isLoading ? (
                    <Loader />
                ) : (
                    <React.Fragment>
                        <h2 className="barras"> Favoritos:</h2>
                        <section className="peliculaspop">
                            {this.state.favorito.length === 0 ?
                                <h1 className='barras'>No tiene favoritos</h1>
                                :
                                <>
                                    {this.state.favorito.map((elem, idx) => <Pelicula key={elem + idx} datospelicula={elem} />)}
                                </>
                            }
                        </section>
                    </React.Fragment>
                )}
            </React.Fragment>

        )
    }
}



export default Favoritos;