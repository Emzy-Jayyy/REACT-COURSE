// import { useState } from 'react'
import React from 'react';
import image from './assets/img.png'
// import viteLogo from '/vite.svg'
import './App.css'

const NavBar = () => {
  return (
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

  )
}

const Hero = () => {
  return (
      <section className="hero-section">
          <p>Welcome to</p>
          <h1>my site</h1>
          <div>
              <button>Download CV</button>
              <button>Hire Me</button>
          </div>

      </section>
  )
}

const Services = () => {
  return (
      <>
          <section className="our-services-section">
              <div className="services-container">
                  <div className="our-services-title">
                      <h3>Our Services</h3>
                      <div></div>
                  </div>
                  <div className="our-services-cards">

                      <div className="card">
                      <img src={image} alt="Web Development Icon" className="card-img" loading="lazy"  />
                          {/* <div className="act-like-card-img"></div> */}
                          <div className="card-details">
                              <p>Web development</p>
                              <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard<br />dummy text ever since the 1500s, when an<br />unknown printer took a galley of type and<br />scrambled it to make a type specimen<br />book</p>
                          </div>
                      </div>

                      <div className="card">
                      <img src={image} alt="Web Development Icon" className="card-img" loading="lazy"  />
                          <div className="card-details">
                              <p>Web development</p>
                              <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard<br />dummy text ever since the 1500s, when an<br />unknown printer took a galley of type and<br />scrambled it to make a type specimen<br />book</p>
                          </div>
                      </div>

                      <div className="card">
                      <img src={image} alt="Web Development Icon" className="card-img" loading="lazy"  />
                          <div className="card-details">
                              <p>Web development</p>
                              <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard<br />dummy text ever since the 1500s, when an<br />unknown printer took a galley of type and<br />scrambled it to make a type specimen<br />book</p>
                          </div>
                      </div>
                  </div>
              </div>

          </section>
      </>

  )
}

const CompanyContact = () => {
  return (
      <>
          <section className='company-contact-section'>
              <h1>Take A Coffee & Chat With Me</h1>
              <div className='company-contact-section-container'>

                  <div className='company-contact-details'>
                      <div className='company-details company-email'>
                          <span className='icon'><i className="fa-regular fa-envelope"></i></span>
                          <a href="mailto:davidiniemem2000@gmail.com">davidiniemem2000@gmail.com</a>
                      </div>
                      <div className='company-details company-number'>
                          <span className='icon'><i className="fa-solid fa-mobile"></i></span>
                          <a href="tel:08070612458">08070612458</a>
                      </div>
                  </div>

                  <form action="" method="get">
                      <div><input type="text" placeholder='Your username' /></div>
                      <div><input type="email" name="" id="" placeholder='email' /></div>
                      <div><textarea name="" id="" cols="30" rows="10" placeholder='Your message'></textarea></div>
                      <div><input type="submit" value="send Message" /></div>
                  </form>
              </div>
          </section>

      </>
  )
}

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <CompanyContact />
    </>
  )
}

export default App
