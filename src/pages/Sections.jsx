import React, { use, useEffect, useRef } from 'react';
import './Sections.css'

function Sections({ id, title, paragraph, projects, onImageClick }) {
    const imageRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');

                    if (src) {
                        img.src = src;
                        img.classList.add('imageReveal');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '0px 0px 100px 0px', // Ajusta el margen según sea necesario
        });

        imageRefs.current.forEach(imageRef => {
            observer.observe(imageRef);
        });

        return () => {
            observer.disconnect();
        }
    }, [projects]);

    return (
        <div id={id} className={`content-section ${title === 'Fotografía' ? 'bg-color-medium-dark' : 'bg-color-dark'}`}>
            <h2 className="autoShow">{title}</h2>
            <p className="autoShow">{paragraph}</p>
            <div className="projects-container">
                {projects.map((project, index) => (
                // Usar 'index' como key es aceptable si el orden del array no cambia
                // y no se añaden o eliminan elementos en el medio.
                <div key={index} className="project-item" onClick={() => onImageClick(project)}>
                    <img 
                        ref={el => { imageRefs.current[index] = el }}
                        src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' 
                        data-src={project.url} 
                        alt={project.alt} 
                        // className="imageReveal" 
                    />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Sections;
