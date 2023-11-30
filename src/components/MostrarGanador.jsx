/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useJugadores } from "../hooks/useJugadores.js";
import "./MostrarGanador.css";
import { useEffect, useState } from "react";


export const MostrarGanador = ({ equipoGanador=[] ,equipo=''}) => {

  const { anadirPuntosAGanador} = useJugadores();
  const [debeActualizarPuntos, setDebeActualizarPuntos] = useState(false);
  
  const navigate = useNavigate();
 
  useEffect(() => {
    if (debeActualizarPuntos) {
      equipoGanador.forEach(jugador => 
        anadirPuntosAGanador(jugador._id, 3)
      );
      setTimeout(() => navigate('/'), 500);
      setDebeActualizarPuntos(false); // Restablece el estado para evitar actualizaciones duplicadas
    }
  }, [ debeActualizarPuntos, equipoGanador]);

  const manejarSumaPuntos = () => {
    setDebeActualizarPuntos(true);
  };

    return (
      <div className='ganador-container'>
        <h3>{`Ganadores: ${equipo}`}</h3>
        <table>
          <thead>
            <tr>
              <th>Jugador</th>
            </tr>
          </thead>
          <tbody>
            {equipoGanador.map(jugador => (
              <tr key={jugador._id}>
                <td>{jugador.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={manejarSumaPuntos}>Sumar Puntos a Ganadores</button>
      </div>
    );
};
