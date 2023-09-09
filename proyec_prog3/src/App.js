import {Route,Switch} from "react-router-dom";
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula";

function App() {
  return (
    <Switch>
      <Route path = "/" component= {Home}/>
      <Route path = "/favoritos" component= {Favoritos}/>
      <Route path = "/detallePelicula" component= {DetallePelicula}/>
    </Switch>
        
  );
}

export default App;
