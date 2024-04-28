import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="logoHeader">
                <img src="../../public/logoImg.svg" title="Logo SportSee" className="logoImg" />
                <img src="../../public/logoTxt.svg" title="Logo SportSee" className="logoTxt" />
            </div>
            <nav className="horizentalMenu">
                <NavLink key="1" to="/"> Accueil </NavLink>
                <NavLink key="2" to="/"> Profil </NavLink>
                <NavLink key="3" to="/"> Réglage </NavLink>
                <NavLink key="4" to="/"> Communauté </NavLink>
            </nav>
        </header>
    )
}
export default Header;