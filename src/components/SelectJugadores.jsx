/* eslint-disable react/prop-types */
import { useState } from 'react';
import './SelectJugadores.css';

export const SelectJugadores = ({ jugadores }) => {
    const [equipoBlanco, setEquipoBlanco] = useState([]);
    const [equipoNegro, setEquipoNegro] = useState([]);
  
    const handleSelectChange = (event, equipo) => {
      const selectedPlayer = event.target.value;
      if (selectedPlayer) {
        if (equipo === 'blanco' && equipoBlanco.length < 7) {
          setEquipoBlanco(equipoBlanco.concat(selectedPlayer));
        } else if (equipo === 'negro' && equipoNegro.length < 7) {
          setEquipoNegro(equipoNegro.concat(selectedPlayer));
        }
      }
    };
  
    const quitarJugador = (jugador, equipo) => {
      if (equipo === 'blanco') {
        setEquipoBlanco(equipoBlanco.filter(nombre => nombre !== jugador));
      } else if (equipo === 'negro') {
        setEquipoNegro(equipoNegro.filter(nombre => nombre !== jugador));
      }
    };
  
    // Para evitar seleccionar el mismo jugador en ambos equipos,
    // filtramos los jugadores que ya están seleccionados en alguno de los equipos.
    const jugadoresDisponibles = jugadores.filter(jugador =>
      !equipoBlanco.includes(jugador.nombre) && !equipoNegro.includes(jugador.nombre)
    );
  
    return (
      <div className='container'>
        <h2>Forma tus Equipos</h2>
        <div>
          <label className='team-section' htmlFor="selectBlanco">Equipo Blanco:</label>
          <select className='team-section.team-blanco' id="selectBlanco" onChange={(e) => handleSelectChange(e, 'blanco')} defaultValue="">
            <option disabled value="">Selecciona un jugador</option>
            {jugadoresDisponibles.map(jugador => (
              <option key={jugador.id} value={jugador.nombre}>{jugador.nombre}</option>
            ))}
          </select>
        </div>
        <div>
          {equipoBlanco.map(jugador => (
            <div key={jugador}>
              {jugador}
              <button  className='remove-button' onClick={() => quitarJugador(jugador, 'blanco')}>Quitar</button>
            </div>
          ))}
        </div>
        <div>
          <label className='team-section' htmlFor="selectNegro">Equipo Negro:</label>
          <select className='team-section.team-negro' id="selectNegro" onChange={(e) => handleSelectChange(e, 'negro')} defaultValue="">
            <option disabled value="">Selecciona un jugador</option>
            {jugadoresDisponibles.map(jugador => (
              <option key={jugador.id} value={jugador.nombre}>{jugador.nombre}</option>
            ))}
          </select>
        </div>
        <div>
          {equipoNegro.map(jugador => (
            <div key={jugador}>
              {jugador}
              <button className='remove-button' onClick={() => quitarJugador(jugador, 'negro')}>Quitar</button>
            </div>
          ))}
        </div>
      </div>
    );
  };