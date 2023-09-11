import React,{ useState } from 'react'
import './Home.css'
import logo from '../Images/logo.png'
const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <div className='LogoLinks'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/">Developer</a>
        <a href="/about">Individuals</a>
        <a href="/services">Institution</a>
        <a href="/contact">Ecosystem</a>
        <a href="/contact">About</a>
      </div>
      </div>
      <div className="button">
        <button>Start Building</button>
      </div>
      
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
    </>
  )
}

export default Home