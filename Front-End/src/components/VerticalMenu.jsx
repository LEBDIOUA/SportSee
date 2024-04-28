import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <aside>
            <nav className="verticalMenu">
                <NavLink key="1" to="/">
                    <img src="../../public/yoga.png" title="Yoga" className="logoMenu" />
                </NavLink>
                <NavLink key="2" to="/">
                    <img src="../../public/natation.png" title="Natation" className="logoMenu" />
                </NavLink>
                <NavLink key="3" to="/">
                    <img src="../../public/velo.png" title="Vélo" className="logoMenu" />
                </NavLink>
                <NavLink key="4" to="/">
                    <img src="../../public/poids.png" title="Poids" className="logoMenu" />
                </NavLink>
            </nav>
            <p>Copyright, SportSee 2020</p>
        </aside>
    )
}
export default Footer;