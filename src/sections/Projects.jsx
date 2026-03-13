import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Restaurant Website',
      description: 'A responsive restaurant website showcasing menu items with clean design and smooth navigation.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Landing Page',
      description: 'Modern landing page with attractive layout and responsive design for all devices.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application that displays current weather conditions and forecasts.',
      tech: ['JavaScript', 'API', 'CSS3'],
      liveLink: '#',
      githubLink: '#'
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.liveLink} className="project-btn btn-live" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.githubLink} className="project-btn btn-github" target="_blank" rel="noopener noreferrer">
                  GitHub Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects