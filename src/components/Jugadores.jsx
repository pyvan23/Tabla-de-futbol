import { useState } from "react";
import SeleccionJugadores from "./SeleccionJugadores";
import { Armado } from "../pages/armado";

export const Jugadores = () => {
  
  const [jugadores, setJugadores] = useState(jugadoresObjeto);

  const JUGADORES = ["LUCAS", "IVAN"];

  const jugadoresObjeto = [
    { id: 1, nombre: "NICO", ptos: 0, asistencia: 0, ganados: 0 },
    { id: 2, nombre: "LUCAS", ptos: 3, asistencia: 2, ganados: 1 },
    { id: 3, nombre: "IVO", ptos: 0, asistencia: 0, ganados: 0 },
    { id: 3, nombre: "MARCELO", ptos: 0, asistencia: 0, ganados: 0 },
    { id: 3, nombre: "RULO", ptos: 0, asistencia: 0, ganados: 0 },
    { id: 3, nombre: "CHICHI", ptos: 0, asistencia: 0, ganados: 0 },
    { id: 3, nombre: "GONZALO", ptos: 0, asistencia: 0, ganados: 0 },
    { id: 3, nombre: "TOMATE", ptos: 0, asistencia: 0, ganados: 0 },
    { id: 3, nombre: "CHORI", ptos: 0, asistencia: 0, ganados: 0 },
    { id: 3, nombre: "OLIVER", ptos: 0, asistencia: 0, ganados: 0 },
    { id: 3, nombre: "MESSI", ptos: 0, asistencia: 0, ganados: 0 },
  ];
  console.log(JUGADORES);

  const calcularPorcentaje = (valor, total) => {
    if (total > 0) {
      return ((valor / total) * 100).toFixed(2) + "%";
    }
    return "0%";
  };
  return (
    <>
      <tbody>
        {jugadores.map((jugador) => (
          <tr key={jugador.id}>
            <td>{jugador.nombre}</td>
            <td>{jugador.ptos}</td>
            <td>{jugador.asistencia}</td>
            <td>{jugador.ganados}</td>
            <td>{calcularPorcentaje(jugador.ganados, jugador.ptos)}</td>
            <td>{calcularPorcentaje(jugador.asistencia, jugador.ptos)}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
