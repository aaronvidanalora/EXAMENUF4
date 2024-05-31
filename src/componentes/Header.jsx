import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-brand">Examen UF4</Link>
                <ul className="navbar-nav d-flex flex-row"> {/* Cambio */}
                    <li className="nav-item p-4">
                        <Link to="/" className="nav-link">Panel</Link>
                    </li>
                    <li className="nav-item p-4">
                        <Link to="/comentarios" className="nav-link">Comentarios</Link>
                    </li>
                    <li className="nav-item p-4">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item p-4">
                        <Link to="/registro" className="nav-link">Registro</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
