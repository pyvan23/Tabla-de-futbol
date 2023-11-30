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
       
        <Jugadores />
      </table>
      </div>
    </>
  );
};
