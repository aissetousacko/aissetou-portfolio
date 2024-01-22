import Link from 'next/link'
// import Card from '../components/Card'
// import kda from 'public/kda/kda_cover.png'
// import oxyty from 'public/oxyty/oxyty_cover.png'
// import hrnet from 'public/hrnet/hrnet_cover.png'
// import learnHome from 'public/learn_home/lh_cover.png'
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaSymfony,
  FaLaravel,
  FaFigma,
  FaPhp,
  FaSass,
  FaArrowRight,
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'

const Home = () => {
  return (
    <div className="home">
      <div className="home__presentation">
        <h1>Bonjour, je suis Aïssetou.</h1>
        <h1>Bienvenue sur mon portefolio !</h1>
        <p>
          Je suis une développeuse web (qui design occasionellement) qui réalise
          des sites avec le souci du détail.
        </p>
        <div className="home__redirection">
          <Link href="/projets" className="redirection-btn">
            <FaArrowRight />
            Voir mes projets
          </Link>
          <Link href="/about" className="redirection-btn">
            <FaArrowRight />
            En savoir plus
          </Link>
        </div>
        <div className="home__technologies">
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <FaPhp />
          <FaReact />
          <FaSymfony />
          <FaLaravel />
          <FaFigma />
          <FaSass />
        </div>
      </div>
    </div>
  )
}

export default Home
