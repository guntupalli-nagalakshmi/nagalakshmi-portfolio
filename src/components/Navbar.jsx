import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          NagaLakshmi
        </a>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link nav-link-highlight">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar