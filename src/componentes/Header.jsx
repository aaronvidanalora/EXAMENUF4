import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-brand">Examen UF4</Link>
                <div className="navbar-nav">
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/crud" className="nav-link">Ranking</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
