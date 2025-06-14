import { NavLink, Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import "./Nav.css";

const NavMockData = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "About", path: "/about" },
  { id: 3, label: "Projects", path: "/projects" },
  { id: 4, label: "Contact", path: "/contact" }
];

const Nav = () => {
  return (
    <nav className="nav" aria-label="Primary navigation">
        <div className="nav__logo">
            <img src={Logo} alt="logo" width="46" height="32" />
        </div>
        <ul className="nav__list">
            {NavMockData.map((data) => (<li key={data.id}>
                <NavLink to={data.path} className={({ isActive }) => isActive ? "active" : ""}>
                    {data.label}
                </NavLink>
            </li>))}
        </ul>
        <Link className="nav__btn" to="/contact">HIRE ME</Link>
    </nav>
  )
}

export default Nav