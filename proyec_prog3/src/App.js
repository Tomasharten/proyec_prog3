import {Route,Switch} from "react-router-dom";
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import Populares from "./screens/Populares/Populares";
import Estrenos from "./screens/Estrenos/Estrenos";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import DetallesPeli from "./screens/Detalles/DetallesPeli";
import Resultados from './screens/Resultados/Resultados'
import VertodasE from './screens/VerTodas/vertodasE/VertodasE'
import VertodasP from './screens/VerTodas/vertodasP/VertodasP'

/// import DetallePelicula from "./screens/DetallePelicula/DetallePelicula";

function App() {
  return (
    <React.Fragment>
    <Header/>
    <Switch>
      <Route path = "/" exact= {true} component= {Home}/>
      <Route path = "/favoritos" component= {Favoritos}/>
      <Route path = "/populares" component= {Populares}/>
      <Route path = "/estrenos" component={Estrenos} />
      <Route path= "/valor/:search" component={Resultados}/> 
      <Route path = "/detalle/:id" component={DetallesPeli} />
      <Route path='/VertodasP' component={VertodasP}/>
      <Route path='/VertodasE' component={VertodasE}/>


    </Switch>
    <Footer/>
    </React.Fragment>    
  );
}
;

export default App;
