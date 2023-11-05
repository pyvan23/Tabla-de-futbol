
import React, { useState } from 'react'

export const Jugadores = () => {

    const jugadoresObjeto = [
        { id: 1, nombre: 'NICO', ptos: 0, asistencia: 0, ganados: 0 },
        { id: 2, nombre: 'LUCAS', ptos: 3, asistencia: 2, ganados: 1 },
        { id: 3, nombre: 'ANDY', ptos: 0, asistencia: 0, ganados: 0 },
    ]

    const [jugadores, setJugadores] = useState(jugadoresObjeto
       
      );

      const calcularPorcentaje = (valor, total) => {
        if (total > 0) {
          return ((valor / total) * 100).toFixed(2) + '%';
        }
        return '0%';
      };
      
    return (
   
  // Dentro de tu declaración de retorno, mapeas este arreglo
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
  )
}


  