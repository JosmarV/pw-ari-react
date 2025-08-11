// Modal.jsx
import React from 'react';
// import './Modal.css';

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{project.tituloproject}</h2>
        <img src={project.imagenUrl} alt={project.alt} />
        {/* <p>{proyecto.descripción}</p> */}
      </div>
    </div>
  );
};

export default Modal;