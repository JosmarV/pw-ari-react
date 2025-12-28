import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Menu({ activeId }) {
    const menuItems = [
        { href: "#home", icon: "fa-solid fa-house", label: "Inicio" },
        { href: "#design", icon: "fa-solid fa-palette", label: "Diseño" },
        { href: "#photography", icon: "fa-solid fa-camera-retro", label: "Fotografía" },
        { href: "#aboutme", icon: "fa-solid fa-glasses", label: "Sobre mi" },
        { href: "#contact", icon: "fa-solid fa-phone", label: "Contácteme" },
    ];

    return (
        <nav className="menu-section">
            <ul>
                {menuItems.map(({ href, icon, label }) => (
                    <li key={label} className={activeId === href.slice(1) ? 'active' : ''}>
                        <a href={href}>
                            <FontAwesomeIcon icon={icon}/>
                            <span className="showLabel">{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu