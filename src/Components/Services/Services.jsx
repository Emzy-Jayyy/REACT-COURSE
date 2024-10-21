import React from 'react'
import './services.css'
import ServiceCard from './Component/ServiceCard'

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
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                  </div>
              </div>

          </section>
      </>
  )
}

export default Services