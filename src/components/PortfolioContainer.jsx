import { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/contact';
import Footer from '../Footer';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;  
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
            return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> 
            <main className='mx=3'>{renderPage()}</main>
            <Footer />
        </div>
    );
 }