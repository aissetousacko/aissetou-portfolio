import styles from 'styles/pages/Home.module.scss'
import Link from 'next/link'
import Card from './components/Card/Card'
import oxyty from 'public/oxyty/oxyty_cover.png'
import hrnet from 'public/hrnet/hrnet_cover.png'
import learnHome from 'public/learn_home/lh_cover.png'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__presentation}>
        <h1>Bonjour, je suis Aïssetou.</h1>
        <h1>Bienvenue sur mon portefolio !</h1>
      </div>

      <div className={styles.home__work}>
        <Link href="/oxyty">
          <Card
            img={oxyty}
            title="Oxyty"
            description="Redesign de la page d'accueil"
          />
        </Link>
        <Link href="/hrnet">
          <Card
            img={hrnet}
            title="HRNet"
            description="Site de gestion d'employés"
          />
        </Link>
        <Link href="/learn-home">
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
