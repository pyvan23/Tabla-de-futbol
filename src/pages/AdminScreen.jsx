/* eslint-disable react/prop-types */
import { SelectJugadores } from '../components/SelectJugadores';
import { useJugadores } from '../auth/context/JugadoresContext';
import { Header } from '../components/Header';

export const AdminScreen = () => {
  const { jugadores } = useJugadores();
 
  return (
    <>
    <Header />
    <SelectJugadores jugadores={jugadores}/>
    </>
  );
};
