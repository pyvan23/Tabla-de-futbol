import { Jugadores } from "../components/Jugadores";
import { Header } from "../components/Header";
import { useJugadores } from "../auth/context/JugadoresContext";


export const TablaScreen = () => {

  const { jugadores, } = useJugadores();
  
 
  console.log(jugadores);
  return (
    <>
      <Header />
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
        <Jugadores jugadores={jugadores} />
      </table>
    {/* <MostrarGanador anadirPuntosAGanador={anadirPuntosAGanador}/> */}
    </>
  );
};
