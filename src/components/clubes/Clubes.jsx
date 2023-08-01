import React, { useState, useEffect } from "react";
import "./Clubes.scss";
import clubesData from "../../baseClubes.json";

const Clubes = () => {
  const [clubes, setClubes] = useState([]);
  const [ligaActual, setLigaActual] = useState("");

  useEffect(() => {
    // Leer los datos del archivo JSON y almacenarlos en el estado
    setClubes(clubesData);
  }, []);

  const mostrarClubes = (liga) => {
    setLigaActual(liga);
  };

  return (
    <div className="league-container ">

      <div className="league-wrapper">
        <button onClick={() => mostrarClubes("premierLeague")}>Premier League</button>
        <button onClick={() => mostrarClubes("laLiga")}>La Liga</button>
        <button onClick={() => mostrarClubes("serieA")}>Serie A</button>
        <button onClick={() => mostrarClubes("bundesliga")}>Bundesliga</button>
        <button onClick={() => mostrarClubes("ligue1")}>Ligue 1</button>
      </div>
      

      {ligaActual !== "" && (
        <div className="clubs-wrapper" >
          {clubes[ligaActual].map((club, index) => (
            <button key={index}>{club.nombre}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Clubes;
