import React from 'react'
import { useEffect, useState } from 'react'
import './services.css'
import ServiceCard from './Component/ServiceCard'
import  Axios  from 'axios';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([])

  const fetchServices = async () => 
    {
    try {
      const response =await Axios({
        method: 'get',
        url:'http://localhost:8000/services',
      })

      console.log('the fetch services data', response.data);
      setServices(response.data);
      
    } catch (error) {
      console.error('this is fetch services error >>>', error)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  useEffect(() => {
    console.log('the fetch services data', services);
  }, [services])

  return (
    <>
          <section className="our-services-section">
              <div className="services-container">
                  <div className="our-services-title">
                      <h3>Our Services</h3>
                      <div></div>
                  </div>
                  <div className="our-services-cards">
                    {/* <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/> */}
                    

                    {
                      services && services?.map(service => (
                        <Link to = {`/services/${service?.name}`}>
                          <ServiceCard title = {service?.name} image={service?.image} desc ={service?.desc} />
                        </Link>
                      ))
                    }
                  </div>
              </div>

          </section>
      </>
  )
}

export default Services