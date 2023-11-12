import  { useState, useEffect } from 'react';
import { Jugadores } from "../components/Jugadores";
import { Header } from '../components/Header';
import { AdminScreen } from './AdminScreen';


export const Tabla = () => {

  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch(' /jugadores.json') 
      .then(response => response.json())
      .then(data => setJugadores(data))
      .catch(error => console.error('Error al cargar los jugadores:', error));
  }, []);

  return (
    <>
     <Header/>
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
        <AdminScreen jugadores={jugadores}/>
      </table>
    </>
  );
};
