'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import oxytyDisplay from 'public/oxyty/oxyty_display.png'
import styles from 'styles/pages/Oxyty.module.scss'
import stylesTag from '../components/Tags/Tags.module.scss'
import stylesIcons from '../../styles/icons.module.scss'
import Link from 'next/link'
import { FaGithub, FaImage, FaLink } from 'react-icons/fa'
import Modal from '../components/Modal/Modal'

const Oxyty = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={styles.oxyty}>
      <h1>Oxyty</h1>

      <div className={styles.oxyty__infos}>
        <div className={styles.oxyty__imgContainer}>
          <Image
            src={oxytyDisplay}
            width={750}
            height={560}
            sizes="(min-width: 500px) 750px, 460px"
            alt="Cover Oxyty"
            className={styles.oxyty__img}
          />
        </div>

        <div className={styles.oxyty__infosRight}>
          <p className={styles.oxyty__description}>
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

          <div className={stylesTag.tags}>
            <p className={stylesTag.tech}>ReactJS</p>
            <p className={stylesTag.tech}>ViteJS</p>
            <p className={stylesTag.tech}>Figma</p>
            <p className={stylesTag.tech}>SASS</p>
          </div>

          <div className={styles.oxyty__infosPart2}>
            <div className={styles.oxyty__date}>
              <h1>Date</h1>
              <p>2023</p>
            </div>

            <div className={styles.oxyty__type}>
              <h1>Type de projet</h1>
              <p>Projet personnel</p>
            </div>
          </div>

          <div className={stylesTag.tags}>
            <p className={stylesTag.tagUi}>UI Design</p>
            <p className={stylesTag.tagDev}>Front - End</p>
          </div>
        </div>
      </div>

      <div className={stylesIcons.iconsDiv}>
        <button className={stylesIcons.icon} onClick={() => setShowModal(true)}>
          <FaImage />
        </button>

        <Link
          href="https://github.com/aissetousacko/oxyty.git"
          target={'_blank'}
          className={stylesIcons.icon}
        >
          <FaGithub />
        </Link>
      </div>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default Oxyty
