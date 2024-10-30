import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className="nav" >
          <a href="">
          <div style={{
              color: 'white'
          }}>
              <Link to='/'>Logo</Link>
          </div>
          </a>

          <ul className="nav-ul">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='contact'>Contact</Link></li>
              <li><Link to='about'>About</Link></li>
          </ul>
      </nav>
    </>
  )
}

export default NavBar