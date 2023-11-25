/* eslint-disable react/prop-types */
import { SelectJugadores } from '../components/SelectJugadores';
import { useJugadores } from '../auth/context/JugadoresContext';

export const AdminScreen = () => {
  const { jugadores } = useJugadores();
 
  return (
    <SelectJugadores jugadores={jugadores}/>
  );
};
