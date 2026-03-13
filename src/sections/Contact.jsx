import './Contact.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiFiverr } from 'react-icons/si'

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'guntupallinagalakshmi782@gmail.com',
      link: 'mailto:guntupallinagalakshmi782@gmail.com',
      icon: <FaEnvelope />
    },
    {
      name: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/naga-lakshmi-guntupalli-a85364240', target:"_blank",
      icon: <FaLinkedin />
    },
    {
      name: 'GitHub',
      value: 'View my code',
      link: '#',
      icon: <FaGithub />
    },
    {
      name: 'Fiverr',
      value: 'Hire me',
      link: 'https://www.fiverr.com/s/8zXL7WE',
      icon: <SiFiverr />
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm actively looking for opportunities to learn and grow as a frontend developer.
          <br />
          Feel free to reach out if you have entry-level positions or projects I can contribute to!
        </p>
        
        <div className="contact-grid">
          {contactLinks.map((contact, index) => (
            <a 
              key={index} 
              href={contact.link} 
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">{contact.icon}</div>
              <h3 className="contact-name">{contact.name}</h3>
              <p className="contact-value">{contact.value}</p>
            </a>
          ))}
        </div>

        <div className="cta-box">
          <h3 className="cta-title">Let's Build Something Amazing Together</h3>
          <p className="cta-text">I'm eager to learn and contribute to your team or project.</p>
          <a href="mailto:guntupallinagalakshmi782@gmail.com" className="cta-button">
            Contact Me
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2026 Naga Lakshmi. Built with React & passion ♥</p>
      </footer>
    </section>
  )
}

export default Contact