export default function Resume() {
    return (
        <div style={pageStyle}>
            <h1>Resume:</h1>
            <ul style={catStyle}>
                Skills: 
                <li style={listStyle}>
                - Programming Languages: JavaScript, TypeScript, Python
                </li>
                <li style={listStyle}>
                - Frameworks/Libraries: React, Node.js, Express, Bootstrap
                </li>
                <li style={listStyle}>
                - Tools/Platforms: Git, Docker, PostgreSQL, VS Code
                </li>
                <li style={listStyle}>
                - Other Skills: REST APIs, Unit Testing, Agile Methodologies
                </li>
            </ul>

            <ul style={catStyle}> 
                Experience: 
                <li style={listStyle}>
                - Collaborated with a team of 4 developers to implement responsive designs using Bootstrap, enhancing mobile usability.
                </li>
                <li style={listStyle}>
                - Integrated RESTful APIs to ensure smooth data flow between front-end and back-end systems.
                </li>
            </ul>

            <ul style={catStyle}>
                Languages: 
                <li style={listStyle}>
                    English (Fluent) 
                </li>
                <li style={listStyle}>
                    Spanish (Conversational)
                </li>
            </ul>
        </div>
    );
}

const pageStyle = {
    backgroundColor: '#8AB0AB',
    padding: '20px',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
};

const catStyle = {
  fontSize: '30px',
};

const listStyle = {
 fontSize: '20px',
};

