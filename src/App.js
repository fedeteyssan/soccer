import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ListadoBotinesSelecciones from './containers/ListadoBotinesSelecciones';
import ListadoBotinesPosiciones from './containers/ListadoBotinesPosiciones';
import ListadoBotinesEstilos from './containers/ListadoBotinesEstilos';
import ScrollToTop from './components/ScrollToTop';
import ListadoBotinesJugador from './containers/ListadoBotinesJugador';
  

const App = () => {

  return (
    <div className="App">

      <BrowserRouter>

      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/seleccion">
          <ScrollToTop/>
          <ListadoBotinesSelecciones/>
        </Route>
        
        <Route exact path="/posicion">
          <ScrollToTop/>
          <ListadoBotinesPosiciones/>
        </Route>

        <Route exact path="/estilo">
          <ScrollToTop/>
          <ListadoBotinesEstilos/>
        </Route>

        <Route exact path="/jugador/:jugadorID/">
          <ScrollToTop/>
          <ListadoBotinesJugador/>
        </Route>
        

      </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
