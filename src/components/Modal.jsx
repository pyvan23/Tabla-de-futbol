/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5"; // Asegúrate de tener react-icons instalado
import "./Modal.css";

const Modal = ({ isOpen, onClose, jugador }) => {
  if (!isOpen) return null;

  // URL de la imagen de fondo para el modal
  const urlImagenFondo = "https://www.zonadeaficionados.es/wp-content/uploads/2021/08/07-Carta-Oro-optimizada.jpg";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal" 
        onClick={e => e.stopPropagation()}
        style={{ backgroundImage: `url(${urlImagenFondo})` }}
      >

    
        <h3 className="fontGold">{jugador.nombre}</h3>
        <IoClose className="modal-close-icon" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
