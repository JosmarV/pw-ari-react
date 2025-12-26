// Importación directa de iconos locales.
import photoshopIcon from '../assets/photoshop.png';
import illustratorIcon from '../assets/illustrator.png';
import canvaIcon from '../assets/canva.png';
import lightroomIcon from '../assets/lightroom.png';

import instagramIcon from '../assets/logo-instagram.svg';
import facebookIcon from '../assets/logo-facebook.svg';

// Objeto para los iconos de habilidades
export const SKILL_ICONS = {
  photoshop: photoshopIcon,
  illustrator: illustratorIcon,
  canva: canvaIcon,
  lightroom: lightroomIcon,
};

export const SOCIAL_MEDIA_ICONS = {
  instagram: instagramIcon,
  facebook: facebookIcon,
};

// Array de imágenes para la sección de diseños
// No es necesario cambiar mucho aquí si las URLs son externas
export const DESIGN_SECTION = [
  { url: './images/work_design/design1.jpg', nameFolder: 'work_design1', alt: 'Catgurt' },
  { url: './images/work_design/design2.jpg', nameFolder: 'work_design2', alt: 'Diseño 2' },
  { url: './images/work_design/design3.jpg', nameFolder: 'work_design3', alt: 'Diseño 3' },
  { url: './images/work_design/design4.jpg', nameFolder: 'work_design4', alt: 'Veneimagen' },
  { url: './images/work_design/design5.jpg', nameFolder: 'work_design5', alt: 'Diseño 5' },
  { url: './images/work_design/design6.jpg', nameFolder: 'work_design6', alt: 'Diseño 6' },
  { url: './images/work_design/design7.jpg', nameFolder: 'work_design7', alt: 'Diseño 7' },
  { url: './images/work_design/design8.gif', nameFolder: 'work_design8', alt: 'Diseño 8' },
  { url: './images/work_design/design9.jpg', nameFolder: 'work_design9', alt: 'Diseño 9' },
  { url: './images/work_design/design10.gif', nameFolder: 'work_design10', alt: 'Diseño 10' },
  { url: './images/work_design/design11.jpg', nameFolder: 'work_design11', alt: 'Diseño 11' }, 
  { url: './images/work_design/design12.jpg', nameFolder: 'work_design12', alt: 'Diseño 12' },
  { url: './images/work_design/design13.jpg', nameFolder: 'work_design13', alt: 'Diseño 13' },
  { url: './images/work_design/design14.jpg', nameFolder: 'work_design14', alt: 'Diseño 14' }
];

// Array de imágenes para la sección de fotografía
export const PHOTOGRAPHY_SECTION = [
  { url: './images/photo1.jpg', alt: 'Yogurt', nameFolder: 'photo_session1', description: 'Fotografía de un delicioso yogurt con frutas frescas y granola, capturando la frescura y textura del alimento.' },
  { url: './images/photo2.jpg', alt: 'Pastel de cumpleaños', nameFolder: 'photo_session2' },
  { url: './images/photo3.jpg', alt: 'Fotografía 3', nameFolder: 'photo_session3' },
  { url: './images/photo4.jpg', alt: 'Fotografía 4', nameFolder: 'photo_session4' },
  { url: './images/photo5.jpg', alt: 'Fotografía 5', nameFolder: 'photo_session5' },
  { url: './images/photo6.jpg', alt: 'Fotografía 6', nameFolder: 'photo_session6' },
  { url: './images/photo7.jpg', alt: 'Fotografía 7', nameFolder: 'photo_session7' },
  { url: './images/photo8.jpg', alt: 'Fotografía 8', nameFolder: 'photo_session8' },
  { url: './images/photo9.jpg', alt: 'Fotografía 9', nameFolder: 'photo_session9' },
  { url: './images/photo10.jpg', alt: 'Fotografía 10', nameFolder: 'photo_session10' }
];
