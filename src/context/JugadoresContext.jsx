/* eslint-disable react/prop-types */
import { createContext, useState,  useEffect } from "react";

export const JugadoresContext = createContext();




export const JugadoresProvider = ({ children }) => {

  const [jugadores, setJugadores] = useState([]);
  const [debeActualizar, setDebeActualizar] = useState(false);

  // Función para añadir puntos a un ganador y marcar que se necesita una actualización
  const anadirPuntosAGanador = (idJugador, puntos) => {
    setJugadores(jugadoresPrevios =>
      jugadoresPrevios.map(jugador =>
        jugador._id === idJugador
          ? { ...jugador, gano: true ,puntos: jugador.puntos + puntos }
          : jugador
      )
    );
    setDebeActualizar(true); // Marca que se necesita una actualización en el servidor
  };

  const actualizarJugadoresEnServidor = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/players", {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jugadores),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Jugadores actualizados con éxito:", data);
    } catch (error) {
      console.error("Error al actualizar jugadores:", error);
    } finally {
      setDebeActualizar(false); 
    }
  };

  useEffect(() => {
    if (debeActualizar) {
      actualizarJugadoresEnServidor();
    }
  }, [debeActualizar]); // Este efecto se ejecuta cuando `debeActualizar` cambia.

  // Efecto para recuperar jugadores del servidor al montar el componente
  useEffect(() => {
    const cargarJugadores = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/players");
        if (!response.ok) {
          throw new Error('Error al cargar los jugadores');
        }
        const data = await response.json();
        setJugadores(data);
      } catch (error) {
        console.error("Error al cargar los jugadores:", error);
      }
    };

    cargarJugadores();
  }, []);

  return (
    <JugadoresContext.Provider value={{ jugadores, anadirPuntosAGanador, actualizarJugadoresEnServidor }}>
      {children}
    </JugadoresContext.Provider>
  );
};
