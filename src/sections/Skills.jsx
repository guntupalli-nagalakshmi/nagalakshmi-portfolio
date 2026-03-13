import './Skills.css'

const Skills = () => {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Git & GitHub',
    'Responsive Design',
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-name">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills