import React from 'react'
import './footer.css'

const Footer = () => {
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

export default Footer