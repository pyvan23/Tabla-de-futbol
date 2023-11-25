/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useJugadores } from "../auth/context/JugadoresContext";
import "./MostrarGanador.css";

export const MostrarGanador = ({ equipoGanador=[]  }) => {
  const { anadirPuntosAGanador } = useJugadores();
  console.log(equipoGanador);
  const navigate = useNavigate();

    // Llamada a la función anadirPuntosAGanador para cada ganador
    const agregarPuntosAGanadores = () => {
        equipoGanador.forEach(jugador => {
            anadirPuntosAGanador(jugador.id,3); // Sumar 3 puntos a cada ganador
        });
        setTimeout(() => navigate('/'), 500);
    };

  


    return (
      <div className='ganador-container'>
        <h3>{`Ganadores: ${equipoGanador.length > 0 ? equipoGanador[0].equipo : ''}`}</h3>
        <table>
          <thead>
            <tr>
              <th>Jugador</th>
            </tr>
          </thead>
          <tbody>
            {equipoGanador.map(jugador => (
              <tr key={jugador.id}>
                <td>{jugador.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={()=>agregarPuntosAGanadores()}>Sumar Puntos a Ganadores</button>
      </div>
    );
};
