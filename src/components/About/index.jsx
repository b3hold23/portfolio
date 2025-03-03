import profile from "../../assets/portfolio-pfp.jpg";
function About() {
  return (
    <section className="my-4">
      <div className="my-2">
        <div className="profile-img my-5">
          <img style={{width: 350, borderRadius: '50%'}} src={profile} alt="pfp" />
        </div>
        <p className="about-me">
        Energetic and optimistic MERN full-stack developer with a background in customer service and over 5 years of experience assisting customers in solving complex issues. Angel is a dedicated problem-solver who thrives on learning new skills and growing his expertise. With a strong foundation in MongoDB, Express, React, and Node.js, he is eager to apply his technical knowledge alongside his interpersonal skills to build user-friendly applications and enhance customer experiences. In previous roles, he maintained email and call queues at record lows and piloted a new email communication service, demonstrating his initiative and efficiency. 
        </p>
      </div>
    </section>
  );
}

export default About;
