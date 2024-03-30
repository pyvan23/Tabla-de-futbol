/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { MostrarGanador } from "./MostrarGanador";
import { DayPicker } from "react-day-picker";
import "./SelectJugadores.css";
import { useJugadores } from "../hooks/useJugadores.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-day-picker/dist/style.css";
import { es } from "date-fns/locale";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export const SelectJugadores = () => {
  const { jugadores, anadirPuntosAGanador } = useJugadores();
  const navigate = useNavigate();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const datePickerRef = useRef(); // Crea la referencia aquí para poder usarla en el componente DayPicker
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [numJugadores, setNumJugadores] = useState(5); // Estado para la cantidad
  const [equipoBlanco, setEquipoBlanco] = useState([]);
  const [equipoNegro, setEquipoNegro] = useState([]);
  const [equipoGanador, setGanador] = useState([]); // Estado para almacenar el equipo ganador
  const [selectedBlanco, setSelectedBlanco] = useState("");
  const [selectedNegro, setSelectedNegro] = useState("");

  const notify = (message) =>
    toast.warn(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const handleDayChange = (date) => {
    // Verifica si la fecha es nula o indefinida y utiliza la fecha actual en ese caso
    const selectedDate = date || new Date();

    setSelectedDay(selectedDate);
    setDatePickerVisibility(false); // Oculta el selector de fecha después de seleccionar una fecha
  };

  // Función para cerrar el DatePicker al hacer clic fuera
  const handleClickOutside = (event) => {
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target)
    ) {
      setDatePickerVisibility(false);
    }
  };

  // Controlador de eventos para clics fuera del DatePicker
  useEffect(() => {
    if (isDatePickerVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDatePickerVisible]);

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleSelectChange = (event, equipo) => {
    const selectedPlayer = jugadores.find(
      (j) => j.nombre === event.target.value
    );
    if (selectedPlayer) {
      if (equipo === "blanco") {
        if (equipoBlanco.length < numJugadores) {
          setEquipoBlanco([...equipoBlanco, selectedPlayer]);
          setSelectedBlanco(""); // Resetea el valor seleccionado del dropdown
        } else {
          // Muestra el cartel si el equipo ya tiene el máximo de jugadores
          notify(`El equipo ${equipo} ya tiene ${numJugadores} jugadores.`);
        }
      } else if (equipo === "negro") {
        if (equipoNegro.length < numJugadores) {
          setEquipoNegro([...equipoNegro, selectedPlayer]);
          setSelectedNegro(""); // Resetea el valor seleccionado del dropdown
        } else {
          // Muestra el cartel si el equipo ya tiene el máximo de jugadores
          notify(`El equipo ${equipo} ya tiene ${numJugadores} jugadores.`);
        }
      }
    }
  };

  const quitarJugador = (jugadorId, equipo) => {
    if (equipo === "blanco") {
      setEquipoBlanco(
        equipoBlanco.filter((jugador) => jugador._id !== jugadorId)
      );
    } else if (equipo === "negro") {
      setEquipoNegro(
        equipoNegro.filter((jugador) => jugador._id !== jugadorId)
      );
    }
  };

  // Para evitar seleccionar el mismo jugador en ambos equipos,
  // filtramos los jugadores que ya están seleccionados en alguno de los equipos.
  const jugadoresDisponibles = jugadores.filter(
    (jugador) =>
      !equipoBlanco.some((blanco) => blanco._id === jugador._id) &&
      !equipoNegro.some((negro) => negro._id === jugador._id)
  );

  const handleWin = async (equipo) => {
    const equipoGanador = equipo === "blanco" ? equipoBlanco : equipoNegro;
    setGanador(equipoGanador); // Establece el equipo ganador
    equipoGanador.forEach((jugador) => anadirPuntosAGanador(jugador._id, 3));
    // Navegar a la ruta deseada después de un breve tiempo
    setTimeout(() => navigate("/"), 3000);
  };

  const equiposCompletos =
    equipoBlanco.length === 7 && equipoNegro.length === 7;
    const onDragEnd = (result) => {
      const { source, destination } = result;
    
      // Si no hay destino o el elemento se soltó en la misma posición, no hacer nada
      if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
        return;
      }
    
      // Verifica que el id del Droppable origen corresponda con el equipo correcto
      if (source.droppableId === "campoBlanco") {
        // Lógica para reordenar equipoBlanco
        const newEquipoBlanco = Array.from(equipoBlanco);
        const [movedItem] = newEquipoBlanco.splice(source.index, 1);
        newEquipoBlanco.splice(destination.index, 0, movedItem);
        setEquipoBlanco(newEquipoBlanco);
      } else if (source.droppableId === "campoNegro") {
        // Lógica para reordenar equipoNegro
        const newEquipoNegro = Array.from(equipoNegro);
        const [movedItem] = newEquipoNegro.splice(source.index, 1);
        newEquipoNegro.splice(destination.index, 0, movedItem);
        setEquipoNegro(newEquipoNegro);
      }
    };
    
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div id="photo">
          <div className="container">
            <ToastContainer />
            <select
              style={{ width: "400px" }}
              id="selectJugadores"
              value={numJugadores}
              onChange={(e) => setNumJugadores(parseInt(e.target.value))}
            >
              <option value="5">5 Jugadores</option>
              <option value="7">7 Jugadores</option>
              <option value="9">9 Jugadores</option>
              <option value="11">11 Jugadores</option>
            </select>
            {/* Botón para mostrar el date picker */}
            <div>
              <span style={{ fontFamily: "sans-serif" }}>
                Seleccione fecha del encuentro:{" "}
              </span>
              <button onClick={toggleDatePicker} className="date-button">
                {selectedDay && selectedDay.toLocaleDateString("es-ES")}
              </button>
            </div>

            {isDatePickerVisible && (
              <div ref={datePickerRef} className="date-picker-container">
                <DayPicker
                  mode="single"
                  style={{ DayPicker: { backgroundColor: "white" } }}
                  selected={selectedDay}
                  onSelect={handleDayChange}
                  locale={es}
                />
              </div>
            )}

            <div className="team-selection ">
              <div className="team-section">
                <select
                  id="selectBlanco"
                  value={selectedBlanco} // Usa el estado para controlar el valor
                  onChange={(e) => {
                    setSelectedBlanco(e.target.value); // Actualiza el estado del valor seleccionado
                    handleSelectChange(e, "blanco");
                  }}
                >
                  <option disabled value="">
                    Blanco
                  </option>
                  {jugadoresDisponibles.map((jugador) => (
                    <option key={jugador._id} value={jugador.nombre}>
                      {jugador.nombre}
                    </option>
                  ))}
                </select>
                {/* Real-time formation display for team Blanco */}
                <div className="team-formation blanco">
                  {equipoBlanco.map((jugador, index) => (
                    <div
                      key={jugador._id}
                      style={{ cursor: "pointer" }}
                      onClick={() => quitarJugador(jugador._id, "blanco")}
                      className="player-item blanco"
                    >
                      {index + 1}. {jugador.nombre}{" "}
     
                    </div>
                  ))}
                </div>
              </div>

              <div className="soccer-field-container">
              <Droppable droppableId="campoBlanco" direction="horizontal">
  {(provided) => (
    <div ref={provided.innerRef} {...provided.droppableProps} className="soccer-field blanco">
      {equipoBlanco.map((jugador, index) => (
        <Draggable key={jugador._id} draggableId={jugador._id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={`player blanco player-${index % numJugadores}`}
            >
              {jugador.nombre}
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
  )}
</Droppable>

<Droppable droppableId="campoNegro" direction="horizontal">
  {(provided) => (
    <div ref={provided.innerRef} {...provided.droppableProps} className="soccer-field negro">
      {equipoNegro.map((jugador, index) => (
        <Draggable key={jugador._id} draggableId={jugador._id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={`player negro player-${index % numJugadores}`}
            >
              {jugador.nombre}
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
  )}
</Droppable>
              </div>
              
              <div className="team-section">
                <select
                  id="selectNegro"
                  value={selectedNegro} // Usa el estado para controlar el valor
                  onChange={(e) => {
                    setSelectedNegro(e.target.value); // Actualiza el estado del valor seleccionado
                    handleSelectChange(e, "negro");
                  }}
                >
                  <option disabled value="">
                    Negro
                  </option>
                  {jugadoresDisponibles.map((jugador) => (
                    <option key={jugador._id} value={jugador.nombre}>
                      {jugador.nombre}
                    </option>
                  ))}
                </select>
                {/* Real-time formation display for team Negro */}
                <div className="team-formation negro">
                  {equipoNegro.map((jugador, index) => (
                    <div
                      key={jugador._id}
                      className="player-item negro"
                      style={{ cursor: "pointer" }}
                      onClick={() => quitarJugador(jugador._id, "negro")}
                    >
                      {index + 1}. {jugador.nombre}{" "}
                      {/* Number added before the name */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Botones para seleccionar el equipo ganador */}
            <div className="winner-buttons">
              <button
                onClick={() => handleWin("blanco")}
                disabled={!equiposCompletos}
              >
                Equipo Blanco Gana
              </button>
              <button
                onClick={() => handleWin("negro")}
                disabled={!equiposCompletos}
              >
                Equipo Negro Gana
              </button>
            </div>

            {/* Sección que muestra las formaciones en una tabla */}

            {/* Componente para mostrar el equipo ganador */}
            {
              <MostrarGanador
                equipoGanador={equipoGanador}
                equipo={
                  equipoGanador === equipoBlanco
                    ? [equipoBlanco, "blanco"]
                    : [equipoNegro, "negro"]
                }
              />
            }
          </div>
        </div>
      </DragDropContext>
    </>
  );
};
