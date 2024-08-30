function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a>
            </li>

        </ul>
    )
}