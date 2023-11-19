/* eslint-disable react/prop-types */
import "./MostrarGanador.css";
export const MostrarGanador = ({ equipoGanador }) => {
    console.log(equipoGanador);
  
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
      </div>
    );
  };
  