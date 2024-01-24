'use client'
import lhDisplay from 'public/learn_home/lh_display.png'
import { FaArrowLeft, FaArrowRight, FaImage } from 'react-icons/fa'
import Image from 'next/image'
import Modal from '../../components/Modal'
import { Fragment, useState } from 'react'
import lh1 from 'public/learn_home/lh-1.png'
import lh2 from 'public/learn_home/lh-2.png'
import lh3 from 'public/learn_home/lh-3.png'
import lh4 from 'public/learn_home/lh-4.png'
import lh5 from 'public/learn_home/lh-5.png'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

const LearnHome = () => {
  const [showModal, setShowModal] = useState(false)
  const slides = [lh1, lh2, lh3, lh4, lh5]

  return (
    <Fragment>
      <div className="learn">
        <h1>Learn@Home</h1>

        <div className="learn__infos">
          <Image
            src={lhDisplay}
            width={750}
            height={560}
            sizes="(min-width: 500px) 750px, 460px"
            alt="Mockup Learn@Home"
            priority
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

        <Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          slides={slides}
        />

        <div className="redirections">
          <Link href="/hrnet" className="redirection-btn redirections__box">
            <FaArrowLeft />
            <h3>HRNet</h3>
          </Link>

          <Link href="/kda" className="redirection-btn redirections__box">
            <h3>K/DA</h3>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default LearnHome
