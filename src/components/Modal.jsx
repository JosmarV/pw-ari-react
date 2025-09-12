// Modal.jsx
import './Modal.css';
import useImageDirectory from '../hooks/useImageDirectory';

const modules = import.meta.glob('../assets/images/**/*', { eager: true });

const Modal = ({ project, onClose }) => {
  const { images, loading, error } = useImageDirectory(modules, project[0].nameFolder);

  if (!project) return null;
  console.log(images);

  if (loading) {
    return <div>Cargando imágenes...</div>;
  }

  if (error) {
    return <div>Hubo un error al cargar las imágenes.</div>;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="project">
          <h2>{project[0].alt}</h2>
          <div className="content-project">
            <img className="modal-image" src={project[0].url} alt={project[0].alt} />
            <div className="description">
              <p>{project[0].description}</p>
            </div>
          </div>
  
        </div>

        <div className="gallery">
          {images.map((imagen, index) => (
            <img 
              key={index} 
              src={imagen} 
              alt={`Imagen ${index}`} 
              style={{ width: '200px', margin: '10px' }} 
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Modal;