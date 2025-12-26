// Modal.jsx
import { useState } from 'react';
import './Modal.css';
import useImageDirectory from '../hooks/useImageDirectory';

const modules = import.meta.glob('../assets/images/**/*', { eager: true });

const Modal = ({ project, onClose }) => {
  const { images, loading, error } = useImageDirectory(modules, project[0].nameFolder);
  const [currentImage, setCurrentImage] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const allProjectImages = [project[0].url, ...images];

  if (!project) return null;
  console.log(images);

  if (loading) {
    return <div>Cargando imágenes...</div>;
  }

  if (error) {
    return <div>Hubo un error al cargar las imágenes.</div>;
  }

  const openFullscreen = (index) => {
    setCurrentImage(index);
    setFullscreen(true);
  }

  const closeFullscreen = () => {
    setFullscreen(false);
  }

  const goToPrevious = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  const goToNext = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Space') closeFullscreen();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
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
            <img className="modal-image" src={project[0].url} alt={project[0].alt} onClick={() => openFullscreen(0)}/>
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
              onClick={() => openFullscreen(index + 1)}
            />
          ))}
        </div>
        
        {fullscreen && (
          <div className='fullScreen-viewer' onKeyDown={handleKeyDown} tabIndex="0">
            <button className="close-fullscreen-btn" onClick={closeFullscreen}>&times;</button>
            <button className="nav-btn prev-btn" onClick={goToPrevious}>&lt;</button>

            <img
              src={allProjectImages[currentImage]}
              alt={`Imagen ${currentImage}`}
              className="fullscreen-image"
            />

            <button className="nav-btn next-btn" onClick={goToNext}>&gt;</button>

            <div className='image-counter'>
              {currentImage + 1} / {allProjectImages.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;