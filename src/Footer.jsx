import React from 'react';

function Footer() {
    return (
        <footer style={footerStyle}>
        <div className="container">
            <p>&copy; {new Date().getFullYear()} Angel Fernandez. All Rights Reserved.</p>
            <p>Contact Me: <a href="" className="text-white">rosa.angel.daniel@gmail.com</a>
            </p>
            <div className="mt-3">
                <a href="https://github.com/b3hold23" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
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
