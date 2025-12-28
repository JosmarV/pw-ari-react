import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Sections from './pages/Sections'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import { useActiveSection } from './hooks/useActiveSection'
// Importa el componente Modal
import Modal from './components/Modal'

// Importa la librería de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faCameraRetro, faPalette, faGlasses, faPhone } from '@fortawesome/free-solid-svg-icons';

// Importa Imágenes
import { DESIGN_SECTION, PHOTOGRAPHY_SECTION } from './utils/image.paths'

// Importa los iconos para redes sociales
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// Añade todos los iconos importados a la librería de Font Awesome
// Solo los iconos que añadas aquí estarán disponibles para ser usados en tu aplicación.
library.add(faHome, faCameraRetro, faPalette, faGlasses, faPhone, faInstagram);


function App() {
  const [openedModal, setOpenedModal] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const activeSection = useActiveSection(['home', 'design', 'photography', 'aboutme', 'contact']);

  // Esta función se pasa al componente Sections
  const handleImageClick = (project) => {
    setSelectedProjects([project]);
    setOpenedModal(true);
    document.body.style.overflow = 'hidden'; // Desactiva el scroll del body cuando el modal está abierto
  };

  const handleCloseModal = () => {
    setOpenedModal(false);
    setSelectedProjects(null); // Limpiar el estado
    document.body.style.overflow = 'auto'; // Reactiva el scroll del body cuando el modal está cerrado
  };

  return (
    <div className='main-container'>
      <Home id="home"></Home>
      <Menu activeId={activeSection}></Menu>
      <Sections 
        id="design" 
        title="Diseño Gráfico" 
        paragraph="Explora mis proyectos de diseño gráfico." 
        projects={DESIGN_SECTION} 
        onImageClick={handleImageClick} 
      />
      <Sections 
        id="photography" 
        title="Fotografía" 
        paragraph="Descubre mi trabajo fotográfico." 
        projects={PHOTOGRAPHY_SECTION} 
        onImageClick={handleImageClick} 
      />
      <AboutMe 
        id="aboutme" 
        title="Sobre mí"
      />
      <Contact id="contact"></Contact>

      {/* Aquí se renderiza el modal si 'openedModal' es true */}
      {openedModal && (
        <Modal project={selectedProjects} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default App
