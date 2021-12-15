const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__presentation">
        <h2 className="about__title">About Me</h2>
        <p className="about__firstparagraph">
          Hello, I'm Matthieu. I'm 23 years old. I live in Saubrigues in the
          South West of France. I've been interested in IT since I was a
          teenager but in september 2021, I joined the Wild Code School to
          really learn programmation.
        </p>
        <p>
          In terms of technologies, I use{" "}
          <span className="purple-text">
            HTML, CSS, SCSS, JavaScript Vanilla, ReactJS, NodeJS, ExpressJS,
            MySQL, Git
          </span>
          . But, I'm curious so I'm not afraid to learn others technologies.
        </p>
      </div>
      <div className="about__portrait" />
    </section>
  );
};

export default About;
