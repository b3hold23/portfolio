export default function AboutMe() {
    return(
        <div style={pageStyle}>
            <h1 style={headingStyle}>About Me:</h1>
            <p style={textStyle}>Hello! My name is Angel Fernandez a few things about me are I am someone always trying to learn something new. I am an actor, I love to play video games. My hobbies are hiking, photography and disc golf. I continue to have a curious mind set which allows me to learn and continue to find new passions like coding. I learn from examples and from my own mistakes. I love to try my best and to learn from it. Passionate software developer with 4 months of hands-on experience in web development using JavaScript, React, and Node.js. Quick learner with a strong foundation in problem-solving and a focus on building efficient, user-friendly applications. Seeking to leverage my skills in a junior developer role.</p>
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

const headingStyle = {
    marginBottom:  '50px',
    textAlign: 'center',
    width: '100%', 
};

const textStyle = {
    textAlign: 'center',
};