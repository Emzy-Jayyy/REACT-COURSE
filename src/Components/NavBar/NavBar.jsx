import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <>
        <nav className="nav" >
          <div style={{
              color: 'white'
          }}>
              logo
          </div>
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