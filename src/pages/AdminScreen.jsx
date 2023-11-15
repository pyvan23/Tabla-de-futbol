/* eslint-disable react/prop-types */
import { useState } from 'react';

export const AdminScreen = ({ jugadores = [] }) => {
  
  console.log("AdminScreen jugadores:", jugadores);
  const [equipoBlanco, setEquipoBlanco] = useState([]);
  const [equipoNegro, setEquipoNegro] = useState([]);

  console.log(jugadores);
  const handleSelectChange = (event, equipo) => {
    const selectedPlayers = Array.from(event.target.selectedOptions, option => option.value);
    if (equipo === 'blanco') {
      setEquipoBlanco(selectedPlayers);
    } else {
      setEquipoNegro(selectedPlayers);
    }
  };
  return (
    <div>
      <h2>Forma tus Equipos</h2>
      <div>
        <label htmlFor="equipoBlanco">Equipo Blanco:</label>
        <select multiple id="equipoBlanco" value={equipoBlanco} onChange={(e) => handleSelectChange(e, 'blanco')}>
          {jugadores.map(jugador => (
            <option key={jugador.id} value={jugador.nombre}>{jugador.nombre}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="equipoNegro">Equipo Negro:</label>
        <select multiple id="equipoNegro" value={equipoNegro} onChange={(e) => handleSelectChange(e, 'negro')}>
          {jugadores.map(jugador => (
            <option key={jugador.id} value={jugador.nombre}>{jugador.nombre}</option>
          ))}
        </select>
      </div>
      <div>
        <h3>Selecciones del Equipo Blanco:</h3>
        <ul>
          {equipoBlanco.map(nombreJugador => (
            <li key={nombreJugador}>{nombreJugador}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Selecciones del Equipo Negro:</h3>
        <ul>
          {equipoNegro.map(nombreJugador => (
            <li key={nombreJugador}>{nombreJugador}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
