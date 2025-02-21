import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid bg-dark">
                <Link className="navbar-brand text-secondary" to="/">My Portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-secondary"></span>
                </button>

                {/* navbar links */}
                <div className="collapse navbar-collapse justify-content-end align-center" id="navbarNavDropdown" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light" to="/resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-light" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
