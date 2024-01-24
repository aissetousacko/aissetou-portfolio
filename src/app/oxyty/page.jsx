'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import oxytyDisplay from 'public/oxyty/oxyty_display.png'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight, FaGithub, FaImage } from 'react-icons/fa'
import Modal from '../../components/Modal'
import oxyty1 from 'public/oxyty/oxyty-1.png'
import oxyty2 from 'public/oxyty/oxyty-2.png'

const Oxyty = () => {
  const [showModal, setShowModal] = useState(false)
  const slides = [oxyty1, oxyty2]

  return (
    <div className="oxyty">
      <h1>Oxyty</h1>

      <div className="oxyty__infos">
        <div className="oxyty__imgContainer">
          <Image
            src={oxytyDisplay}
            width={750}
            height={560}
            sizes="(min-width: 500px) 750px, 460px"
            alt="Cover Oxyty"
            priority
          />
        </div>

        <div className="oxyty__infosRight">
          <p className="oxyty__description">
            Oxyty Sports Club est une salle de sport situé au cœur de la ville
            de Saint Ouen l&apos;Aumône proposant des appareils de fitness de
            dernier cris et des cours collectifs avec des coachs et des
            professeurs dynamiques. Le projet a pour but de renouveler le design
            de la page d&apos;accueil afin d&apos;améliorer l&apos;expérience
            utilisateur. (
            <Link
              href="https://oxytysportsclub-saintouenlaumone.com/"
              target={'_blank'}
            >
              Voir le site
            </Link>
            )
          </p>

          <div className="tags">
            <p className="tech">ReactJS</p>
            <p className="tech">ViteJS</p>
            <p className="tech">Figma</p>
            <p className="tech">SASS</p>
          </div>

          <div className="oxyty__infosPart2">
            <div className="oxyty__date">
              <h3>Date</h3>
              <p>2023</p>
            </div>

            <div className="oxyty__type">
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
        <button className="icon" onClick={() => setShowModal(true)}>
          <FaImage />
        </button>

        <Link
          href="https://github.com/aissetousacko/oxyty.git"
          target={'_blank'}
          className="icon"
        >
          <FaGithub />
        </Link>
      </div>

      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        slides={slides}
      />

      <div className="redirections">
        <Link href="/kda" className="redirection-btn redirections__box">
          <FaArrowLeft />
          <h3>K/DA</h3>
        </Link>

        <Link href="/hrnet" className="redirection-btn redirections__box">
          <h3>HRNet</h3>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default Oxyty
