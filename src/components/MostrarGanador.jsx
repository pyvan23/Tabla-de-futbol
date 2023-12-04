/* eslint-disable react/prop-types */

import "./MostrarGanador.css";

export const MostrarGanador = ({ equipoGanador = [], equipo = "" }) => {
  return (
    <div className="ganador-container">
      <h3>{`Ganadores: ${equipo}`}</h3>
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
          </tr>
        </thead>
        <tbody>
          {equipoGanador.map((jugador) => (
            <tr key={jugador._id}>
              <td>{jugador.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
