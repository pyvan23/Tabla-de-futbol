import  { useState, useEffect } from 'react';
import { Jugadores } from "../components/Jugadores";


export const Tabla = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    
    const jugadoresCargados = [""]; // Reemplaza esto con los datos reales
    setJugadores(jugadoresCargados);
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
        <Jugadores />
      </table>
    </>
  );
};
