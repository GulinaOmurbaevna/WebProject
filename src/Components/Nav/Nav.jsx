import React, { useRef } from 'react'
import navCss from './Nav.module.css'

function Nav() {
    const menu = useRef()
    
    const handler = () => {
        menu.current.classList.toggle(navCss.activeNav)
    }

  return (
    <nav className={navCss.nav}>
       <div className={navCss.logo}>
        <a href="/">Amxio</a>
       </div>
       <ul ref={menu}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Testimonials</a></li>
        <li><a href="/">Teams</a></li>
        <li><a href="/">Contact</a></li>
       </ul>
       <button>Contact Us</button>
       <i id={navCss.bars} className="fa-solid fa-bars-staggered" onClick={handler}></i>
    </nav>
  )
}

export default Nav
