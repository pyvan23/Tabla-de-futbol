/* eslint-disable react/prop-types */
import "./Modal.css"; 

const Modal = ({ isOpen, onClose, jugador, imagenCarta }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-body">
          <div className="modal-text">
            <h3>{jugador.nombre}</h3>
            <p>Puntos Totales: {jugador.puntos}</p>
            <p>Historia: Aquí va la historia...</p>
            <p>Torneos Ganados: {jugador.torneosGanados}</p>
            {/* Agregar aquí más información como necesites */}
          </div>
          <div className="modal-image-container">
            {/* Aquí colocas la imagen de la carta */}
            <img src={imagenCarta} alt="Imagen de la carta" className="carta-imagen"/>
          </div>
        </div>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};


export default Modal;
