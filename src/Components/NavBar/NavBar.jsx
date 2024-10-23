import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <>
        <nav className="nav" >
          <a href="">
          <div style={{
              color: 'white'
          }}>
              logo
          </div>
          </a>

          <ul className="nav-ul">
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
          </ul>
      </nav>
    </>
  )
}

export default NavBar