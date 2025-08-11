import React from 'react';
import './Sections.css'

function Sections({ title, paragraph, projects, onImageClick }) {
    return (
        <div className="content-section">
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <div className="projects-container">
                {projects.map((project, index) => (
                // Usar 'index' como key es aceptable si el orden del array no cambia
                // y no se añaden o eliminan elementos en el medio.
                <div key={index} className="project-item" onClick={() => onImageClick(project)}>
                    <img src={project.url} alt={project.alt} />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Sections;
