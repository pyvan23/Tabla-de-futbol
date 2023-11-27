/* eslint-disable react/prop-types */

import { useJugadores } from "../auth/context/JugadoresContext";


export const Jugadores =  (  ) => {
  
  const { jugadores } = useJugadores(); 
  console.log('jugadores:',jugadores);
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
          <tr key={jugador._id}>
            <td>{jugador.nombre}</td>
            <td>{jugador.puntos}</td>
            <td>{jugador.asistencias}</td>
            <td>{jugador.ganados}</td>
            <td>{calcularPorcentaje(jugador.ganados, jugador.puntos)}</td>
            <td>{calcularPorcentaje(jugador.asistencias, jugador.puntos)}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
