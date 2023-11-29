import { Jugadores } from "../components/Jugadores";
import { Header } from "../components/Header";



export const TablaScreen = () => {


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
        <Jugadores />
      </table>
    </>
  );
};
