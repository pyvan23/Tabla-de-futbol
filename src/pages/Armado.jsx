import  { useState } from 'react';

export const Armado = () => {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [teamPoints, setTeamPoints] = useState({ team1: 0, team2: 0 });

  const handlePlayerSelect = (event) => {
    setSelectedPlayer(event.target.value);
  };

  const handleWin = (teamName) => {
    setTeamPoints(prevPoints => ({
      ...prevPoints,
      [teamName]: prevPoints[teamName] + 3,
    }));
  };

  return (
    <div>
      {/* Dropdown para seleccionar jugador */}
      <select value={selectedPlayer} onChange={handlePlayerSelect}>
        <option value="">Selecciona un jugador</option>
        {/* Opciones de jugadores */}
        <option value="jugador1">Jugador 1</option>
        <option value="jugador2">Jugador 2</option>
        {/* Agregar más jugadores según sea necesario */}
      </select>
      
      {/* Botón para simular victoria de equipo */}
      <button onClick={() => handleWin('team1')}>Equipo 1 Gana</button>
      <button onClick={() => handleWin('team2')}>Equipo 2 Gana</button>

      {/* Puntos de equipo */}
      <div>
        <p>Puntos del Equipo 1: {teamPoints.team1}</p>
        <p>Puntos del Equipo 2: {teamPoints.team2}</p>
      </div>
    </div>
  );
};


