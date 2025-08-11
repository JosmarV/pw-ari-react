import React from 'react';
import './AboutMe.css'
import photoshopIcon from '../assets/photoshop.png';
import illustratorIcon from '../assets/illustrator.png';
import canvaIcon from '../assets/canva.png';
import lightroomIcon from '../assets/lightroom.png';

function AboutMe({ title, paragraph}) {
    const skills = [
       {url: photoshopIcon, alt: 'Photoshop'},
       {url: illustratorIcon, alt: 'Illustrator'},
       {url: canvaIcon, alt: 'Canva'},
       {url: lightroomIcon, alt: 'Lightroom'}
    ];

    return (
        <div className="content-about-me">
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <div className="about-me-content">
                <div className='about-me-photo'>
                    <img src="https://i.pinimg.com/736x/b8/85/9f/b8859fb474e7573792d71f367faf53eb.jpg" alt="Arianna" />
                </div>
                <div className='about-me-description'>
                    <p>Mi nombre es Arianna, soy una diseñadora gráfica apasionada por crear visuales que cuenten historias y transmitan mensajes poderosos.</p>
                    <p>Mi experiencia abarca desde la creación de flyers atractivos para las redes sociales, hasta el desarrollo de identidades visuales y logos memorables que reflejen la esencia de cada marca con la que trabajo.</p>
                    <p>Mi enfoque es siempre colaborativo, trabajando estrechamente con los clientes para asegurar que sus visiones se hagan realidad. Si estás buscando renovar tu presencia en línea, estoy aquí para ayudarte a crear algo verdaderamente único.</p>
                </div>
                <div className='about-me-skills'>
                    <h3>Habilidades</h3>
                    <div className='about-me-skills-icons'>
                        {skills.map((skill, idx) => (
                            <img src={skill.url} alt={skill.alt} title={skill.alt} key={idx} />
                        ))}
                    </div>
                </div>
                {/* <div className='about-me-others'>Otros</div> */}
                <div className='about-me-education'>
                    <h3>Educación</h3>
                    <p>
                        TSU en Artes Audiovisuales
                        <span>UNEFM, 2020-2025.</span>
                    </p>
                    <p>
                        Curso de Diseño Gráfico
                        <span>2022.</span>
                    </p>
                    <p>
                        Curso de inglés avanzado 
                        <span>2020.</span>
                    </p>
                </div>
                <div className='about-me-experience'>
                    <h3>Experiencia</h3>
                    <p>
                        Fotografía profesional y diseño gráfico 
                        <span>Desde 2023</span>
                    </p>
                    <p>
                        Diseñadora gráfica, 4101 Media 
                        <span>Desde 2025</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;