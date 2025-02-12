export default function Portfolio() {
    return (
        <div style={pageStyle}>
            <ul style={gridStyle}>
                <li style={itemStyle}>
                    <a href="https://github.com/b3hold23/readme-creator" target="_blank" rel="noopener noreferrer">
                        <img src="/Portfolio-Assets/command-line.JPG" alt="ReadMe Creator img" style={imageStyle} />
                        <p style={linkStyle}>Readme Creator</p>
                    </a>
                </li>
                <li style={itemStyle}>
                    <a href="https://github.com/b3hold23/car-loan-payment" target="_blank" rel="noopener noreferrer">
                        <img src="/Portfolio-Assets/screenshot.png" alt="Car loan payment website" style={imageStyle} />
                        <p style={linkStyle}>Car Loan Payment</p>
                    </a>
                </li>
                <li style={itemStyle}>
                    <a href="https://github.com/b3hold23/weather-app" target="_blank" rel="noopener noreferrer">
                        <img src="/Portfolio-Assets/Completed site.JPG" alt="Weather Dashboard website homepage" style={imageStyle} />
                        <p style={linkStyle}>Weather App</p>
                    </a>
                </li>
                <li style={itemStyle}>
                    <a href="https://github.com/b3hold23/employee-tracker" target="_blank" rel="noopener noreferrer">
                        <img src="/Portfolio-Assets/employee-tracker.JPG" alt="Employee Tracker website" style={imageStyle} />
                        <p style={linkStyle}>Employee Tracker</p>
                    </a>
                </li>
            </ul>
        </div>
    );
}

const pageStyle = {
    backgroundColor: '#8AB0AB',
    padding: '20px',
    minHeight: '80vh',
};

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '20px',
    listStyleType: 'none',
    padding: '0',
    margin: '0',
};

const itemStyle = {
    textAlign: 'center',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '250px', 
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const linkStyle = {
    marginTop: '10px',
    fontSize: '25px',
    color: '#23061E',
    textDecoration: 'none',
};


