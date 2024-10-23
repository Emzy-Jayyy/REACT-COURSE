import React from 'react'
import image from '../../../assets/img.png'

const ServiceCard = ({image,title, desc}) => {
  return (
    <div className="card">
      <img src={image}/>
        <div className="card-details">
            <p>{title}</p>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default ServiceCard