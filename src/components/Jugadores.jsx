/* eslint-disable react/prop-types */

  import { useState } from "react";
import { useJugadores } from "../context/JugadoresContext";
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
  imagenCarta="https://files.oaiusercontent.com/file-Qgzpog9ZUl3mEC3iA1eXhf0u?se=2023-11-30T02%3A49%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D3599%2C%20immutable&rscd=attachment%3B%20filename%3Dimage.png&sig=VplnvKgk6mELDqWIFyJwezEozQ62fg5tCOjjvwdyb1k%3D"
/>
      </>
    );
  };
