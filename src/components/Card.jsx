import React from 'react'

const Card = ({ img, title, description }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt={title} />
      </div>

      <div className="card__description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
