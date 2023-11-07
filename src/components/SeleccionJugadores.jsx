/* eslint-disable react/prop-types */
import { useState } from "react";

const SeleccionJugadores = () => {

  const [equipoBlanco, setEquipoBlanco] = useState([]);
  const [equipoNegro, setEquipoNegro] = useState([]);

  
  const handleSelectChange = (event, equipo) => {
    const selectedPlayers = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    if (equipo === "blanco") {
      setEquipoBlanco(selectedPlayers);
    } else {
      setEquipoNegro(selectedPlayers);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="equipoBlanco">Equipo Blanco:</label>
        <select
          multiple
          id="equipoBlanco"
          value={equipoBlanco}
          onChange={(e) => handleSelectChange(e, "blanco")}
        >
          {jugadoresArr.map((jugador) => (
            <option key={jugador} value={jugador}>
              {jugador}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="equipoNegro">Equipo Negro:</label>
        <select
          multiple
          id="equipoNegro"
          value={equipoNegro}
          onChange={(e) => handleSelectChange(e, "negro")}
        >
          {jugadoresArr.map((jugador) => (
            <option key={jugador} value={jugador}>
              {jugador}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3>Selecciones del Equipo Blanco:</h3>
        <ul>
          {equipoBlanco.map((jugador) => (
            <li key={jugador}>{jugador}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Selecciones del Equipo Negro:</h3>
        <ul>
          {equipoNegro.map((jugador) => (
            <li key={jugador}>{jugador}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeleccionJugadores;
