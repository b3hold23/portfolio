const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">My Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* navbar links */}
                <div className="collapse navbar-collapse justify-content-end align-center" id="navbarNavDropdown" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="/resume" className="nav-link">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;