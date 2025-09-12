import React from 'react';
import './Contact.css'
import { SOCIAL_MEDIA_ICONS } from '../utils/image.paths.js';

function Contact() {
    return (
        <div id='contact' className="content-section bg-color-dark">
            <h2>Contacto</h2>
            <p>Si deseas ponerte en contacto conmigo, no dudes en hacerlo...</p>
            <div className="two-section">
                <div className="contact-form">
                    <form>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" required></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div className="social-media-and-info">
                    <h3>Redes Sociales</h3>
                    <ul>
                        <li><img src={SOCIAL_MEDIA_ICONS.instagram} alt="Instagram" /> <a href="https://www.instagram.com/aripictures.v/">@aripictures.v</a></li>
                        <li><img src={SOCIAL_MEDIA_ICONS.facebook} alt="Facebook" /> <a href="https://www.facebook.com/aripictures">/aripictures</a></li>
                    </ul>
                </div>
            </div>
            <ul>
            </ul>
        </div>
    )
}

export default Contact;