import React from 'react'
import image from '../../../assets/img.png'

const ServiceCard = () => {
  return (
    <div className="card">
      <img src={image} alt="Web Development  Icon"className="card-img" loading="lazy"  />
        <div className="card-details">
            <p>Web development</p>
            <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard<br />dummy text ever since the 1500s, when an<br />unknown printer took a galley of type and<br />scrambled it to make a type specimen<br />book</p>
        </div>
    </div>
  )
}

export default ServiceCard