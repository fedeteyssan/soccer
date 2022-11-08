import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ListadoBotinesSelecciones from './containers/ListadoBotinesSelecciones';
import ListadoBotinesPosiciones from './containers/ListadoBotinesPosiciones';
import ListadoBotinesEstilos from './containers/ListadoBotinesEstilos';
import ScrollToTop from './components/ScrollToTop';
  

const App = () => {

  return (
    <div className="App">

      <BrowserRouter>

      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/seleccion/:seleccionID">
          <ScrollToTop/>
          <ListadoBotinesSelecciones/>
        </Route>

        <Route exact path="/seleccion/:seleccionID/:posicionID">
          <ScrollToTop/>
          <ListadoBotinesSelecciones/>
        </Route>

        <Route exact path="/seleccion/:seleccionID/:estiloID">
          <ScrollToTop/>
          <ListadoBotinesSelecciones/>
        </Route>
        

        <Route exact path="/posicion/:posicionID">
          <ScrollToTop/>
          <ListadoBotinesPosiciones/>
        </Route>

        <Route exact path="/posicion/:posicionID/:seleccionID">
          <ScrollToTop/>
          <ListadoBotinesPosiciones/>
        </Route>

        <Route exact path="/estilo/:estiloID">
          <ScrollToTop/>
          <ListadoBotinesEstilos/>
        </Route>

        <Route exact path="/estilo/:estiloID/:posicionID">
          <ScrollToTop/>
          <ListadoBotinesEstilos/>
        </Route>

        <Route exact path="/estilo/:estiloID/:posicionID/:seleccionID">
          <ScrollToTop/>
          <ListadoBotinesEstilos/>
        </Route>

        <Route exact path="/estilo/:estiloID/:seleccionID">
          <ScrollToTop/>
          <ListadoBotinesEstilos/>
        </Route>
        

      </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
