import {Route,Switch} from "react-router-dom";
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import Populares from "./screens/Populares/Populares";
import Estrenos from "./screens/Estrenos/Estrenos";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
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
      {/* <Route path= "/formulario" component={Resultados}/> */}
    </Switch>
    <Footer/>
    </React.Fragment>    
  );
}
;

export default App;
