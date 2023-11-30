import { Jugadores } from "../components/Jugadores";
import { Header } from "../components/Header";
import "./TablaScreen.css";


export const TablaScreen = () => {


  return (
    <>
     <div className="background">
      <h1>2023</h1>
      <Header />
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
      </div>
    </>
  );
};
