function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostgreSQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>

        <h3>Certifications</h3>
        <ul className="skills">
          <li>Full Stack Web Development Certification - University of Utah</li>
        </ul>
        <a href="https://docs.google.com/document/d/1v1_z_xXTXuTMhieKSG-P0Boi8WW3xhYdnaP3i6Ql3dQ/edit?usp=sharing">
          <button className="resumeBtn"><span>Click Here to view my work Resume</span></button>
        </a>
      </div>
    </section>
  );
}

export default Resume;
