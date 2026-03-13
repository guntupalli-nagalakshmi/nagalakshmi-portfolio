import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm an aspiring <strong>Frontend Developer</strong> passionate about creating clean and responsive web experiences.
            </p>
            <p className="about-description">
              I'm currently building my skills in HTML, CSS, JavaScript, React, and Tailwind CSS. I focus on writing clean code and creating responsive designs that work seamlessly across all devices.
            </p>
            <p className="about-description">
              As a beginner in web development, I'm constantly learning and eager to take on new challenges. I'm looking for opportunities to grow and contribute to exciting projects.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3 className="stat-number">3</h3>
                <p className="stat-label">Projects Built</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">7+</h3>
                <p className="stat-label">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About