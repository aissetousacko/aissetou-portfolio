import React from 'react'
import Card from '../components/Card'
import learnHome from '../assets/learn_home/lh_cover.png'
import hrnet from '../assets/hrnet/hrnet_cover.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="home__presentation">
        <p>Bonjour, je suis Aïssetou.</p>
        <p>Bienvenue sur mon portefolio !</p>
      </div>

      <div className="home__work">
        <Link to="/hrnet">
          <Card
            img={hrnet}
            title="HRNet"
            description="Site de gestion d'employés"
            reverse={false}
          />
        </Link>
        <Link to="/learn-home">
          <Card
            img={learnHome}
            title="Learn@Home"
            description="Application de soutien scolaire"
            reverse={true}
          />
        </Link>
      </div>
    </div>
  )
}

export default Home
