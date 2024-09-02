export default function Portfolio() {
    return (
        <div style={pageStyle}>

            {/* Add clickable links to external websites */}
            <ul style={gridStyle}>
                <li style={itemStyle}>
                    <img className="fit-picture" src="Portfolio-Assets/command-line.JPG" alt="ReadMe Creator img" style={imageStyle} />
                    <a href="https://github.com/b3hold23/readme-creator" target="_blank" rel="noopener noreferrer">Readme Creator</a>
                </li>
                <li style={itemStyle}>
                    <img className="fit-picture" src="Portfolio-Assets/screenshot.png" alt="Car loan payment website" style={imageStyle} /> 
                    <a href="https://github.com/b3hold23/car-loan-payment" target="_blank" rel="noopener noreferrer">Car Loan Payment</a>
                </li>
                <li style={itemStyle}>
                    <img className="fit-picture" src="Portfolio-Assets/Completed site.JPG" alt="Weather Dashboard website homepage" style={imageStyle} /> 
                    <a href="https://github.com/b3hold23/weather-app" target="_blank" rel="noopener noreferrer">Weather App</a>
                </li>
                <li style={itemStyle}>
                    <img className="fit-picture" src="Portfolio-Assets/employee-tracker.JPG" alt="Employee Tracker website" style={imageStyle} />
                    <a href="https://github.com/b3hold23/employee-tracker" target="_blank" rel="noopener noreferrer">Employee Tracker</a>
                </li>
            </ul>
        </div>
    );
}

// CSS-in-JS Styles
const pageStyle = {
    backgroundColor: '#8AB0AB', // Background color for the page
    padding: '20px',            // Add some padding around the content
    minHeight: '80vh',         // Ensure the page takes up at least the full viewport height
};

const gridStyle = {
    display: 'grid',            // Use grid layout
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Responsive grid with minimum item width
    gap: '20px',                // Space between grid items
    listStyleType: 'none',      // Remove bullet points from list
    padding: '0',               // Remove default padding
    margin: '0',                // Remove default margin
};

const itemStyle = {
    textAlign: 'center',        // Center-align the text
};

const imageStyle = {
    width: '100%',              // Make images take up the full width of their container
    height: 'auto',             // Keep aspect ratio of images
    maxHeight: '150px',         // Set a maximum height for images to ensure consistency
    objectFit: 'cover',         // Ensure images cover the area while maintaining aspect ratio
};
  