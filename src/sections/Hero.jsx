import './Hero.css'
import profileImage from '../assets/photo.jpg'

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">
            Naga Lakshmi
            <span className="hero-name-highlight">.</span>
          </h1>
          <h2 className="hero-title">
            <span className="gradient-text">Frontend Developer</span>
          </h2>
          <p className="hero-description">
            I'm a beginner frontend developer passionate about building modern, responsive websites using React.
            Currently learning and growing my skills to create beautiful web experiences.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToProjects} className="btn-primary">
              View My Projects
            </button>
            <button onClick={scrollToContact} className="btn-secondary">
              Get In Touch
            </button>
            <a href="#" className="btn-outline" download>
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={profileImage} alt="Naga Lakshmi" height={260} width={260} />
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Hero