import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cover from './components/cover/Cover';
import Home from './components/home/Home';
import BootListByTeam from './containers/BootListByTeam';
import BootListByPosition from './containers/BootListByPosition';
import BootListByStyle from './containers/BootListByStyle';
import BootListByPlayer from './containers/BootListByPlayer';
import BootListByBrand from './containers/BootListByBrand';
  

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

        <Route exact path="/team">
          <BootListByTeam/>
        </Route>
        
        <Route exact path="/position">
          <BootListByPosition/>
        </Route>

        <Route exact path="/style">
          <BootListByStyle/>
        </Route>

        <Route exact path="/brand">
          <BootListByBrand/>
        </Route>

        <Route exact path="/player">
          <BootListByPlayer/>
        </Route>
        

      </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
