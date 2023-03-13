import React from 'react'

const Card = ({ img, title, description, reverse }) => {
  return (
    <div className={reverse ? 'card' : 'card'}>
      {/* <div className="card__img">
        <img src={img} alt={title} />
      </div> */}

      <img src={img} alt={title} />

      <div className="card__description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
