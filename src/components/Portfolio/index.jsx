import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'beeMine',
      description: 'React/JavaScript/CSS',
      link: "https://bee-mine.netlify.app/",
      repo: "https://github.com/b3hold23/Valentine"
    },
    {
      name: 'pastelPuzzels',
      description: 'HTML/CSS/JavaScript',
      link: "https://b3hold23.github.io/car-loan-payment/",
      repo: "https://github.com/b3hold23/car-loan-payment"
    },
    {
      name: 'ledWall',
      description: 'JavaScript/Node',
      link: "https://github.com/b3hold23/readme-creator",
      repo: "https://github.com/b3hold23/readme-creator"
    },
    {
      name: 'ledWall',
      description: 'Typescript',
      link: "https://drive.google.com/file/d/1XQouG26ZJlw-ZVwM7uFXF7aBkkGHGgZC/view",
      repo: "https://github.com/b3hold23/social-network-api"
    },
    {
      name: 'calculator',
      description: 'Python/Flask/React',
      link: "https://github.com/Durfey32/Workout-with-Mental-Health",
      repo: "https://github.com/Durfey32/Workout-with-Mental-Health"
    },
    {
      name: 'pastelPuzzels',
      description: 'Python',
      link: "https://github.com/b3hold23/dinner-menu",
      repo: "https://github.com/b3hold23/dinner-menu"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
