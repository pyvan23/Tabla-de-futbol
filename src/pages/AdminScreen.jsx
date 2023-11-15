/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { SelectJugadores } from '../components/SelectJugadores';

export const AdminScreen = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch("/jugadores.json")
      .then((response) => response.json())

      .then((data) => setJugadores(data))

      .catch((error) => console.error("Error al cargar los jugadores:", error));
  }, []);
 
  return (
    <SelectJugadores jugadores={jugadores}/>
  );
};
