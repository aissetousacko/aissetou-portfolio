import React from 'react'
import Card from '../components/Card'
import learnHome from '../assets/lh_card.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="home__presentation">
        <p>Bonjour, je suis Aïssetou.</p>
        <p>Bienvenue sur mon portefolio !</p>
      </div>

      <div className="home__work">
        <Link to="/learn-home">
          <Card
            img={learnHome}
            title="Learn@Home"
            description="Application de soutien scolaire"
          />
        </Link>
      </div>
    </div>
  )
}

export default Home
