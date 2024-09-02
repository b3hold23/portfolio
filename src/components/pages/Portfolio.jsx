export default function Portfolio() {
    return (
        <div>

        {/* Add clickable links to external websites */}
        <ul>
            <li>
                <img className="fit-picture" src="Portfolio-Assets/command-line.JPG" alt="ReadMe Creator img"  />
                <a href="https://github.com/b3hold23/readme-creator" target="_blank" rel="noopener noreferrer">Readme Creator</a>
            </li>
            <li>
                <img className="fit-picture" src="Portfolio-Assets/screenshot.png" alt="Car loan payment website"/> 
                <a href="https://github.com/b3hold23/car-loan-payment" target="_blank" rel="noopener noreferrer">Car Loan Payment</a>
            </li>
            <li>
                <img className="fit-picture" src="Portfolio-Assets/Completed site.JPG" alt="Weather Dashboard website homepage"/> 
                <a href="https://github.com/b3hold23/weather-app" target="_blank" rel="noopener noreferrer">Weather App</a>
            </li>
            <li>
                <img className="fit-picture" src="Portfolio-Assets/employee-tracker.JPG" />
                <a href="https://github.com/b3hold23/employee-tracker" target="_blank" rel="noopener noreferrer">Employee Tracker</a>
            </li>
        </ul>
    </div>
    );
}   