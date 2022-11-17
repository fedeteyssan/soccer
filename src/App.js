import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cover from './components/cover/Cover';
import Home from './components/home/Home';
import ListadoBotinesSelecciones from './containers/ListadoBotinesSelecciones';
import ListadoBotinesPosiciones from './containers/ListadoBotinesPosiciones';
import ListadoBotinesEstilos from './containers/ListadoBotinesEstilos';
import ListadoBotinesJugador from './containers/ListadoBotinesJugador';
  

const App = () => {

  return (
    <div className="App">

      <BrowserRouter>

      <Switch>

        <Route exact path="/">
          <Cover></Cover>
        </Route>

        <Route exact path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/seleccion">
          <ListadoBotinesSelecciones/>
        </Route>
        
        <Route exact path="/posicion">
          <ListadoBotinesPosiciones/>
        </Route>

        <Route exact path="/estilo">
          <ListadoBotinesEstilos/>
        </Route>

        <Route exact path="/jugador">
          <ListadoBotinesJugador/>
        </Route>
        

      </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
