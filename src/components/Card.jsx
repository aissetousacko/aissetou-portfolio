import Image from 'next/image'

const Card = ({ img, title, description }) => {
  return (
    <div className="card">
      <Image src={img} alt={title} />

      <div className="card__description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
