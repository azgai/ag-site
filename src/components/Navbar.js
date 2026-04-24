import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2>Anime Gaming Hub</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/anime">Anime</Link>
                <Link to="/games">Games</Link>
                <Link to="/jrpg">JRPG</Link>
            </div>
        </nav>
    );
}