import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Sections from './pages/Sections'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
// Importa el componente Modal
import Modal from './Modal'

// Importa la librería de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faCameraRetro, faPalette, faGlasses, faPhone } from '@fortawesome/free-solid-svg-icons';

// Importa los iconos para redes sociales
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { use } from 'react';

// Añade todos los iconos importados a la librería de Font Awesome
// Solo los iconos que añadas aquí estarán disponibles para ser usados en tu aplicación.
library.add(faHome, faCameraRetro, faPalette, faGlasses, faPhone, faInstagram);

// Define los datos de tus imágenes de manera organizada
const designSection = [
  { url: 'https://i.pinimg.com/736x/97/f2/ad/97f2ad33c8a7c89c435c955aeb16b5cb.jpg', alt: 'flyer biblia' },
  { url: 'https://i.pinimg.com/1200x/7c/82/9f/7c829f9bef88bbf26352142634d2fe09.jpg', alt: 'imagen de tipografía' },
  { url: 'https://i.pinimg.com/736x/48/86/17/488617e9953afd1b97a9e06a4bcc4e7d.jpg', alt: 'diseño de portada' },
  { url: 'https://i.pinimg.com/1200x/a8/57/f5/a857f568a80087f60c21ec36ce4d7c93.jpg', alt: 'diseño de logo' },
    { url: 'https://i.pinimg.com/736x/97/f2/ad/97f2ad33c8a7c89c435c955aeb16b5cb.jpg', alt: 'flyer biblia' },
  { url: 'https://i.pinimg.com/1200x/7c/82/9f/7c829f9bef88bbf26352142634d2fe09.jpg', alt: 'imagen de tipografía' },
  { url: 'https://i.pinimg.com/736x/48/86/17/488617e9953afd1b97a9e06a4bcc4e7d.jpg', alt: 'diseño de portada' },
  { url: 'https://i.pinimg.com/1200x/a8/57/f5/a857f568a80087f60c21ec36ce4d7c93.jpg', alt: 'diseño de logo' },
];

const photographySection = [
  { url: 'https://i.pinimg.com/736x/42/d4/f8/42d4f89cc714d373563eeaa0553f78c9.jpg', alt: 'orilla de mar' },
  { url: 'https://i.pinimg.com/736x/b8/85/9f/b8859fb474e7573792d71f367faf53eb.jpg', alt: 'Chica sentada' },
  { url: 'https://i.pinimg.com/736x/f4/56/93/f456934f68306128d1d21491b5760b6f.jpg', alt: 'Fotografía de paisaje' },
  { url: 'https://i.pinimg.com/736x/86/cb/2b/86cb2b38264c678fb4b38b3767bfdef0.jpg', alt: 'Hombre graduado' },
    { url: 'https://i.pinimg.com/736x/42/d4/f8/42d4f89cc714d373563eeaa0553f78c9.jpg', alt: 'orilla de mar' },
  { url: 'https://i.pinimg.com/736x/b8/85/9f/b8859fb474e7573792d71f367faf53eb.jpg', alt: 'Chica sentada' },
  { url: 'https://i.pinimg.com/736x/f4/56/93/f456934f68306128d1d21491b5760b6f.jpg', alt: 'Fotografía de paisaje' },
  { url: 'https://i.pinimg.com/736x/86/cb/2b/86cb2b38264c678fb4b38b3767bfdef0.jpg', alt: 'Hombre graduado' },
];


function App() {
  const [openedModal, setOpenedModal] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState([]);

  // Esta función se pasa al componente Sections
  const handleImageClick = (project) => {
    setSelectedProjects([project]);
    setOpenedModal(true);
  };

  const handleCloseModal = () => {
    setOpenedModal(false);
    setSelectedProjects(null); // Limpiar el estado
  };

  return (
    <div>
      <Home></Home>
      <Menu></Menu>
      <Sections title="Diseño Gráfico" paragraph="Explora mis proyectos de diseño gráfico." projects={designSection} onImageClick={handleImageClick} />
      <Sections title="Fotografía" paragraph="Descubre mi trabajo fotográfico." projects={photographySection} onImageClick={handleImageClick} />
      <AboutMe title="Sobre mí" paragraph="Soy una apasionada del diseño y la fotografía." />
      <Contact></Contact>

      {/* Aquí se renderiza el modal si 'openedModal' es true */}
      {openedModal && (
        <Modal project={selectedProjects} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default App
