import styles from 'styles/pages/LearnHome.module.scss'
import lhPc from 'public/learn_home/lh_pc.png'
import Tags from '../components/Tags/Tags'
import { FaImage } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import Image from 'next/image'

const LearnHome = () => {
  /**
   * Modal code
   */

  // const modalContainer = document.querySelector('.modal__container')
  // const modalTriggers = document.querySelectorAll('.modal__trigger')
  // modalTriggers.forEach((trigger) =>
  //   trigger.addEventListener('click', toggleModal)
  // )

  // function toggleModal() {
  //   console.log('click')
  //   modalContainer.classList.toggle('active')
  // }

  return (
    <div className={styles.learn}>
      <h1>Learn@Home</h1>

      <div className={styles.learn__infos}>
        <Image src={lhPc} width={650} height={400} alt="Mockup Learn@Home" />

        <div className={styles.learn__infosRight}>
          <p className={styles.learn__description}>
            Learn@Home est une application de soutien scolaire permettant à un
            bénévole et un élève de communiquer entre eux. L&apos;objectif de ce
            projet a été de concevoir le design du site web et de le rendre
            accessible sur un ordinateur ou un smartphone.
          </p>

          <Tags text="Figma" tag="tech" />

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

          <Tags text="UI Design" tag="tag-ui" />
        </div>
      </div>

      {/* <div className="modal__container">
        <div className="overlay modal__trigger"></div>

        <div className="modal">
          <button className="modal__close">
            <FaTimes />
          </button>

          <h1>Soon...</h1>
        </div>
      </div> */}

      {/* Bouton pour ouvrir la modale */}
      {/* <button className="modal__btn modal__trigger">
        <FaImage />
      </button> */}
    </div>
  )
}

export default LearnHome
