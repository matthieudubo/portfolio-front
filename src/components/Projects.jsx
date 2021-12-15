import restau from "../assets/wild-restau.png";
import heroes from "../assets/wild-heroes.png";
import liveup from "../assets/live-up.png";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="title">My Projects</h2>
      <div className="projects__container">
        <a
          href="https://matthieudubo.github.io/The-Wild-restau/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="projects__container-card">
            <div className="projects__container-card-recto">
              <img src={restau} alt="wild-restau" />
              <h3>The Wild Restau</h3>
            </div>
            <p>
              It's a fictive project for a restaurant. It was realised in two
              weeks with HTML, SCSS and JavaScript Vanilla only.
            </p>
          </div>
        </a>
        <a
          href="https://matthieudubo.github.io/wild-heroes/#/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="projects__container-card">
            <div className="projects__container-card-recto">
              <img src={heroes} alt="wild-heroes" />
              <h3>Wild Heroes</h3>
            </div>
            <p>
              Project realised in one month with React, CSS and two APIs. You
              can find information about heroes and there are two quiz to play.
            </p>
          </div>
        </a>
        <a
          href="https://matthieudubo.github.io/Liveup/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="projects__container-card">
            <div className="projects__container-card-recto">
              <img src={liveup} alt="live-up" />
              <h3>Live Up</h3>
            </div>
            <p>
              Project realised during a hackathon, in approximately 30 hours.
              It's a fullstack project. We used React for the front, ExpressJs
              for the back and MySQL for the database.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
