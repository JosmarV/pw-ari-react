import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Menu() {
    const menuItems = [
        { href: "#", icon: "fa-solid fa-house", label: "Inicio" },
        { href: "#", icon: "fa-solid fa-palette", label: "Diseño" },
        { href: "#", icon: "fa-solid fa-camera-retro", label: "Fotografía" },
        { href: "#", icon: "fa-solid fa-glasses", label: "Sobre mi" },
        { href: "#", icon: "fa-solid fa-phone", label: "Contáctame" },
    ];

    return (
        <nav className="menu-section">
            <ul>
                {menuItems.map(({ href, icon, label }) => (
                    <li key={label}>
                        <a href={href}>
                            <FontAwesomeIcon icon={icon} />
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu