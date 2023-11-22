'use client'
import styles from 'styles/pages/LearnHome.module.scss'
import stylesTag from '../components/Tags/Tags.module.scss'
import stylesIcons from '../../styles/icons.module.scss'
import lhDisplay from 'public/learn_home/lh_display.png'
// import Tags from '../components/Tags/Tags'
import { FaImage } from 'react-icons/fa'
import Image from 'next/image'
import Modal from '../components/Modal/Modal'
import { Fragment, useState } from 'react'

const LearnHome = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Fragment>
      <div className={styles.learn}>
        <h1>Learn@Home</h1>

        <div className={styles.learn__infos}>
          <Image
            src={lhDisplay}
            width={750}
            height={560}
            priority={true}
            sizes="(min-width: 500px) 750px, 460px"
            alt="Mockup Learn@Home"
          />

          <div className={styles.learn__infosRight}>
            <p className={styles.learn__description}>
              Learn@Home est une application de soutien scolaire permettant à un
              bénévole et un élève de communiquer entre eux. L&apos;objectif de
              ce projet a été de concevoir le design du site web et de le rendre
              accessible sur un ordinateur ou un smartphone.
            </p>

            {/* <Tags text="Figma" tag="tech" /> */}
            <p className={stylesTag.tech}>Figma</p>

            <div className={styles.learn__infosPart2}>
              <div className={styles.learn__date}>
                <h1>Date</h1>
                <p>2022</p>
              </div>

              <div className={styles.learn__type}>
                <h1>Type de projet</h1>
                <p>Projet de formation</p>
              </div>
            </div>

            {/* <Tags text="UI Design" tag="tag-ui" /> */}
            <p className={stylesTag.tagUi}>UI Design</p>
          </div>
        </div>

        <button className={stylesIcons.icon} onClick={() => setShowModal(true)}>
          <FaImage />
        </button>

        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </div>
    </Fragment>
  )
}

export default LearnHome
