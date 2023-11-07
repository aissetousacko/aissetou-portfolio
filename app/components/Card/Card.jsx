import styles from './Card.module.scss'
import Image from 'next/image'

const Card = ({ img, title, description }) => {
  return (
    <div className={styles.card}>
      {/* <div className="card__img">
        <img src={img} alt={title} />
      </div> */}

      <Image src={img} alt={title} />

      <div className={styles.card__description}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
