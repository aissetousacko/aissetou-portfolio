'use client'
import lhDisplay from 'public/learn_home/lh_display.png'
import { FaImage } from 'react-icons/fa'
import Image from 'next/image'
import Modal from '../../components/Modal'
import { Fragment, useState } from 'react'

const LearnHome = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Fragment>
      <div className="learn">
        <h1>Learn@Home</h1>

        <div className="learn__infos">
          <Image
            src={lhDisplay}
            width={750}
            height={560}
            priority={true}
            sizes="(min-width: 500px) 750px, 460px"
            alt="Mockup Learn@Home"
          />

          <div className="learn__infosRight">
            <p className="learn__description">
              Learn@Home est une application de soutien scolaire permettant à un
              bénévole et un élève de communiquer entre eux. L&apos;objectif de
              ce projet a été de concevoir le design du site web et de le rendre
              accessible sur un ordinateur ou un smartphone.
            </p>

            <p className="tech">Figma</p>

            <div className="learn__infosPart2">
              <div className="learn__date">
                <h3>Date</h3>
                <p>2022</p>
              </div>

              <div className="learn__type">
                <h3>Type de projet</h3>
                <p>Projet de formation</p>
              </div>
            </div>

            <p className="tagUi">UI Design</p>
          </div>
        </div>

        <button className="icon" onClick={() => setShowModal(true)}>
          <FaImage />
        </button>

        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </div>
    </Fragment>
  )
}

export default LearnHome
