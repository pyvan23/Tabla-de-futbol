import  { useState, useEffect } from 'react';
import { Jugadores } from "../components/Jugadores";


export const Tabla = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch(' /jugadores.json') // Asegúrate de que la ruta sea correcta
      .then(response => response.json())
      .then(data => setJugadores(data))
      .catch(error => console.error('Error al cargar los jugadores:', error));
  }, []);

  return (
    <>
      <h1>2023</h1>
      <table>
        <thead>
          <tr>
            <th>JUGADORES</th>
            <th>PTOS</th>
            <th>ASISTENCIA</th>
            <th>GANADOS</th>
            <th>% EFECT.</th>
            <th>% ASISTENCIA</th>
          </tr>
        </thead>
        <Jugadores jugadores={jugadores}/>
      </table>
    </>
  );
};
