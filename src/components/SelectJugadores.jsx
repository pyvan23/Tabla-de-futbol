/* eslint-disable react/prop-types */
import { useState } from 'react';
import './SelectJugadores.css';

export const SelectJugadores = ({ jugadores }) => {
    
    const [equipoBlanco, setEquipoBlanco] = useState([]);
    const [equipoNegro, setEquipoNegro] = useState([]);
  
    const handleSelectChange = (event, equipo) => {
      const selectedPlayer = jugadores.find(j => j.nombre === event.target.value);
      if (selectedPlayer) {
        if (equipo === 'blanco' && !equipoBlanco.includes(selectedPlayer)) {
          setEquipoBlanco([...equipoBlanco, selectedPlayer]);
        } else if (equipo === 'negro' && !equipoNegro.includes(selectedPlayer)) {
          setEquipoNegro([...equipoNegro, selectedPlayer]);
        }
      }
    };
  
    const quitarJugador = (jugadorId, equipo) => {
      if (equipo === 'blanco') {
        setEquipoBlanco(equipoBlanco.filter(jugador => jugador.id !== jugadorId));
      } else if (equipo === 'negro') {
        setEquipoNegro(equipoNegro.filter(jugador => jugador.id !== jugadorId));
      }
    };
    
  
    // Para evitar seleccionar el mismo jugador en ambos equipos,
    // filtramos los jugadores que ya están seleccionados en alguno de los equipos.
    const jugadoresDisponibles = jugadores.filter(jugador =>
      !equipoBlanco.some(blanco => blanco.id === jugador.id) && !equipoNegro.some(negro => negro.id === jugador.id)
    );
  
    return (
      <div className='container'>
        <h2>Forma tus Equipos</h2>
        
        <div className='team-selection'>
          <div className='team-section'>
            <label htmlFor="selectBlanco">Equipo Blanco:</label>
            <select id="selectBlanco" onChange={(e) => handleSelectChange(e, 'blanco')} defaultValue="">
              <option disabled value="">Selecciona un jugador</option>
              {jugadoresDisponibles.map(jugador => (
                <option key={jugador.id} value={jugador.nombre}>{jugador.nombre}</option>
              ))}
            </select>
          </div>
    
          <div className='soccer-field-container'>
      <div className='soccer-field'>
        {equipoBlanco.map((jugador, index) => (
         <div key={jugador.id} className={`player blanco player-${index % 7}`} onClick={() => quitarJugador(jugador.id, 'blanco')}>
         {jugador.nombre}
       </div>
        ))}
      </div>
      <div className='soccer-field'>
        {equipoNegro.map((jugador, index) => (
       <div key={jugador.id} className={`player negro player-${index % 7}`} onClick={() => quitarJugador(jugador.id, 'negro')}>
       {jugador.nombre}
     </div>
        ))}
      </div>
    </div>
    
    
          <div className='team-section'>
            <label htmlFor="selectNegro">Equipo Negro:</label>
            <select id="selectNegro" onChange={(e) => handleSelectChange(e, 'negro')} defaultValue="">
              <option disabled value="">Selecciona un jugador</option>
              {jugadoresDisponibles.map(jugador => (
                <option key={jugador.id} value={jugador.nombre}>{jugador.nombre}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
    
  };