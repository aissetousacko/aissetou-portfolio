import Image from 'next/image'
import React from 'react'
import kdaDisplay from 'public/kda/kda_display.png'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const KDA = () => {
  return (
    <div className="kda">
      <h1>K/DA</h1>

      <div className="kda__infos">
        <Image
          src={kdaDisplay}
          sizes="(min-width: 500px) 750px, 460px"
          alt="Cover kda"
          priority
        />

        <div className="kda__infosRight">
          <p className="kda__description">
            K/DA est un site web qui présente le groupe K/DA, qui est un groupe
            de musique composé de personnages issues du jeu League of Legends.
            On pourra y retrouver une description des membres du groupe, les
            liens vers leurs plateformes de streaming et leurs réseaux sociaux.
          </p>

          <div className="tags">
            <p className="tech">Figma</p>
            <p className="tech">ReactJS</p>
            <p className="tech">SASS</p>
          </div>

          <div className="kda__infosPart2">
            <div className="kda__date">
              <h3>Date</h3>
              <p>2023</p>
            </div>

            <div className="kda__type">
              <h3>Type de projet</h3>
              <p>Projet personnel</p>
            </div>
          </div>

          <div className="tags">
            <p className="tagUi">UI Design</p>
            <p className="tagDev">Front - End</p>
          </div>
        </div>
      </div>

      <div className="iconsDiv">
        <Link
          href="https://kda-sand.vercel.app/"
          target={'_blank'}
          className="icon"
        >
          <FaExternalLinkAlt />
        </Link>
        <Link
          href="https://github.com/aissetousacko/kda"
          target={'_blank'}
          className="icon"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  )
}

export default KDA
