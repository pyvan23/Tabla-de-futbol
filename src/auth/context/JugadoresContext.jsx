/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";

const JugadoresContext = createContext();

export const useJugadores = () => useContext(JugadoresContext);

export const JugadoresProvider = ({ children }) => {
  
  const [jugadores, setJugadores] = useState([]);
  
  // Función para añadir puntos a un ganador
  const anadirPuntosAGanador = (idJugador, puntos) => {
    setJugadores((jugadores) =>
      jugadores.map((jugador) =>
        jugador.id === idJugador
          ? { ...jugador, puntos: jugador.puntos + puntos }
          : jugador
      )
    );
  };

  // Cargar jugadores del JSON
  useEffect(() => {
    fetch("/jugadores.json")
      .then((response) => response.json())
      .then((data) => setJugadores(data))
      .catch((error) => console.error("Error al cargar los jugadores:", error));
  }, []);

  return (
    <JugadoresContext.Provider value={{ jugadores, anadirPuntosAGanador }}>
      {children}
    </JugadoresContext.Provider>
  );
};