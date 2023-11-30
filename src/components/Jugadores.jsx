/* eslint-disable react/prop-types */

  import { useState } from "react";
import { useJugadores } from "../hooks/useJugadores.js";
import Modal from "./Modal";
import "./Jugadores.css"; 



  export const Jugadores =  (  ) => {
    
    const { jugadores } = useJugadores(); 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedJugador, setSelectedJugador] = useState(null);
    
      const calcularPorcentaje = (valor, total) => {
      if (total > 0) {
        return ((valor / total) * 100).toFixed(2) + "%";
      }
      return "0%";
    };

    const openModalWithJugador = jugador => {
      setSelectedJugador(jugador);
      setModalIsOpen(true);
    };
    


    const jugadoresOrdenados = jugadores.sort((a, b) => b.puntos - a.puntos);
    return (
      <>
       <thead >
        <tr >
          <th className="thead">JUGADORES</th>
          <th className="thead">PTOS</th>
          <th>ASISTENCIA</th>
          <th>GANADOS</th>
          <th>% EFECT.</th>
          <th>% ASISTENCIA</th>
        </tr>
      </thead>
        <tbody>
        {jugadoresOrdenados.map((jugador) => (
          <tr className="jugador-fila" key={jugador._id} onClick={() => openModalWithJugador(jugador)}>
            <td>{jugador.nombre}</td>
            <td>{jugador.puntos}</td>
            <td>{jugador.asistencias}</td>
            <td>{jugador.ganados}</td>
            <td>{calcularPorcentaje(jugador.ganados, jugador.puntos)}</td>
            <td>{calcularPorcentaje(jugador.asistencias, jugador.puntos)}</td>
          </tr>
        ))}
        </tbody>
        <Modal
  isOpen={modalIsOpen} 
  onClose={() => setModalIsOpen(false)} 
  jugador={selectedJugador} 
 
/>
      </>
    );
  };
