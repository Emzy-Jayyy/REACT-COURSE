import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Hero from '../../Components/Hero/Hero'
import Services from '../../Components/Services/Services'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        {/* <NavBar/> */}
        <Hero/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default Home