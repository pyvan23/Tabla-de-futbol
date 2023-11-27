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
        jugador._id === idJugador
          ? { ...jugador, puntos: jugador.puntos + puntos }
          : jugador
      )
    );
  };
  const actualizarJugadoresEnServidor = async() => {
    return fetch("http://localhost:8080/api/players", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jugadores),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Jugadores actualizados con éxito:", data);
    })
    .catch(error => {
      console.error("Error al actualizar jugadores:", error);
    });
  };


  // recuperamos jugadores del server
  useEffect(() => {
    fetch("http://localhost:8080/api/players")
    
      .then((response) => response.json())
      .then((data) => setJugadores(data))
      .catch((error) => console.error("Error al cargar los jugadores:", error));
  }, []);

   

  return (
    <JugadoresContext.Provider value={{ jugadores, anadirPuntosAGanador,actualizarJugadoresEnServidor }}>
      {children}
    </JugadoresContext.Provider>
  );
};