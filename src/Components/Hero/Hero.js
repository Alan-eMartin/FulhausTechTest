import { useState, useEffect } from 'react'
import './styles.scss'
import Burger from '@animated-burgers/burger-slide'
import '@animated-burgers/burger-slide/dist/styles.css'
import Nav from '../Nav/Nav'
import FulhausLogo from '../../Assets/icons/fulhausLogo.png'


const Hero = () => {

  // State
  const [navOpen, setNavOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Check Screen width to ensure that navigation is alway visable in desktop or any width above 1151
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, [])


  // Toggle Mobile Menu
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <header className="home">
      <div className="container header-content">
        <div className="logo">
          <a href="https://fulhaus.com/">
            <img
              src={FulhausLogo}
              alt='Fulhaus Logo'
              className='logo'
            />
          </a>
          <Burger 
            Component='button' 
            type='button' 
            className='mobile-button'
            onClick={() => toggleNav()}
            isOpen={screenWidth >= 1150 || !navOpen ? false : true}
          />
        </div>
        <h1 className="hero-heading">
          Welcome Home <span className="mobile-create-your-own">
            <a href="https://fulhaus.com/pages/how-it-works" title='Create your own package'>
              Create your own
            </a>
          </span>
        </h1>
      </div>
      <Nav 
        isMobileOpen={navOpen}
        screenSize={screenWidth}
      />
    </header>
  )
}

export default Hero;