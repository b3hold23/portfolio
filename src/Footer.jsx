import React from 'react';

function Footer() {
    return (
        <footer style={footerStyle}>
        <div className="container">
            <p>&copy; {new Date().getFullYear()} Angel Fernandez. All Rights Reserved.</p>
            <p>Contact us: <a href="mailto:example@example.com" className="text-white">example@example.com</a></p>
            
            {/* Social Media Icons */}
            <div className="mt-3">
                <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </div>
        </div>
    </footer>
    );
}


const footerStyle = {
    backgroundColor: '#3E505B',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    position: 'relative',
    bottom: '0',
    width: '100%',
    marginTop: 'auto',
};

export default Footer;
