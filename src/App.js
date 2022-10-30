import './App.css';

import TituloSeccion from './components/tituloSeccion/TituloSeccion';

function App() {
  return (
    <main className="App">
      
      <TituloSeccion text="Selecciona un pais" className="contenedor-titulo contenedor-titulo-pais"/>
      <TituloSeccion text="Selecciona por jugador" className="contenedor-titulo contenedor-titulo-estilo"/>
    </main>
  );
}

export default App;
