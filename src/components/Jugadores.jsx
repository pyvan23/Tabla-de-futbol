/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useJugadores } from "../hooks/useJugadores.js";
import Modal from "./Modal";
import "./Jugadores.css"; 

export const Jugadores = () => {
  const { jugadores } = useJugadores(); 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedJugador, setSelectedJugador] = useState(null);
  const [cargando, setCargando] = useState(true); 

  useEffect(() => {
    // Simulación de la carga de datos con un tiempo de espera
    const timer = setTimeout(() => {
      setCargando(jugadores.length === 0); // Esto establecerá cargando a false cuando los jugadores estén listos
    }, 1000); // Espera de 2 segundos para simular la carga de datos

    // Limpieza del timer al desmontar el componente
    return () => clearTimeout(timer);
  }, [jugadores]);// Estado para manejar si la carga está en progreso
    
 
console.log(jugadores);
  const openModalWithJugador = jugador => {
    setSelectedJugador(jugador);
    setModalIsOpen(true);
  };

  const jugadoresOrdenados = jugadores.sort((a, b) => b.puntos - a.puntos);
  return (
    <>
      {cargando ? (
        <div >
          <div >Loding...</div> {/* Elemento visual para el indicador de carga */}
        </div>
      ) : (
        <div  >
        <table className="contenedor-tabla">
          <thead >
            <tr className="thead">
              <th className="thead">#</th>
              <th className="thead">JUGADORES</th>
              <th className="thead">PTOS</th>
              <th className="thead">ASISTENCIA</th>
              <th className="thead">GANADOS</th>
              <th className="thead">% EFECT.</th>
              <th className="thead">% ASISTENCIA</th>
            </tr>
          </thead>
          <tbody>
            {jugadoresOrdenados.map((jugador, index) => (
              <tr className="jugador-fila" key={jugador._id} onClick={() => openModalWithJugador(jugador)}>
                <td>{index + 1}</td>
                <td>{jugador.nombre}</td>
                <td>{jugador.puntos}</td>
                <td>{jugador.asistencias}</td>
                <td>{jugador.ganados}</td>
                <td>{'0'}</td>
                <td>{'0'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
      <Modal
        isOpen={modalIsOpen} 
        onClose={() => setModalIsOpen(false)} 
        jugador={selectedJugador}
      />
    </>
  );
};