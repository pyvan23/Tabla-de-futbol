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
        <div className="data-point fontGold" style={{ top: '59%', left: '31%' }}>{34}</div>
        <div className="data-point fontGold" style={{ top: '69%', left: '31%' }}>{jugador.puntos}</div>
        <div className="data-point fontGold" style={{ top: '78%', left: '31%' }}>{33}</div>
        <div className="data-point fontGold" style={{ top: '59%', left: '51%' }}>{26}</div>
        <div className="data-point fontGold" style={{ top: '69%', left: '51%' }}>{66}</div>
        <div className="data-point fontGold" style={{ top: '78%', left: '51%' }}>{34}</div>
      
      
        <IoClose className="modal-close-icon" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
