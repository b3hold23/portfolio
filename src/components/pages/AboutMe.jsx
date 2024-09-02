export default function AboutMe() {
    return(
        <div style={pageStyle}>
            <h1 style={headingStyle}>About Me:</h1>
            <p style={textStyle}>Hello! My name is Angel Fernandez a few things about me are I am someone always trying to learn something new. I am an actor, I love to play video games. My hobbies are hiking, photography and disc golf. I continue to have a curious mind set which allows me to learn and continue to find new passions like coding. I have been coding for about 4 months. I am a fast learner and a hands on learner. I learn from examples and from my own mistakes. I love to try my best and to learn from it.   </p>
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
    marginBottom:  '75px',
    textAlign: 'center',
    width: '100%', 
};

const textStyle = {
    textAlign: 'center',
};