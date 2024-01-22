import Card from '@/src/components/Card'
import Link from 'next/link'
import React from 'react'
import kda from 'public/kda/kda_cover.png'
import oxyty from 'public/oxyty/oxyty_cover.png'
import hrnet from 'public/hrnet/hrnet_cover.png'
import learnHome from 'public/learn_home/lh_cover.png'

const Projets = () => {
  return (
    <div className="home__work">
      <Link href="/kda">
        <Card img={kda} title="K/DA" description="Site de présentation" />
      </Link>
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
  )
}

export default Projets
