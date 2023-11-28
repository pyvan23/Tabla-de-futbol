/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useJugadores } from "../context/JugadoresContext";
import "./MostrarGanador.css";

export const MostrarGanador = ({ equipoGanador=[] ,equipo=''}) => {
console.log(equipoGanador);
  const { anadirPuntosAGanador, actualizarJugadoresEnServidor } = useJugadores();
  
  const navigate = useNavigate();
 
 const agregarPuntosAGanadores = () => {
  // Actualizamos los puntos de todos los jugadores ganadores primero
  equipoGanador.forEach(jugador => 
    anadirPuntosAGanador(jugador._id, 3)
  );

  // Después de actualizar todos los puntos, actualizamos el servidor
  actualizarJugadoresEnServidor().then(() => {
    // Una vez que los jugadores se han actualizado con éxito en el servidor,
    // navega de vuelta a la página de inicio tras una breve pausa
    setTimeout(() => navigate('/'), 500);
  })
  .catch(error => {
    // Manejo de errores
    console.error("Error al actualizar jugadores en el servidor:", error);
  });
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
        <button onClick={()=>agregarPuntosAGanadores()}>Sumar Puntos a Ganadores</button>
      </div>
    );
};
