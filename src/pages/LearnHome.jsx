import React from 'react'
import lhLogo from '../assets/learn_home/lh_logo.png'
// import lhLogo2 from '../assets/lh_logo2.png'
import lhPc from '../assets/learn_home/lh_pc.png'
import lhPc1 from '../assets/learn_home/lh_pc1.png'
import lhPc2 from '../assets/learn_home/lh_pc2.png'
import lhPc3 from '../assets/learn_home/lh_pc3.png'
import lhPc4 from '../assets/learn_home/lh_pc4.png'
import lhPc5 from '../assets/learn_home/lh_pc5.png'
import lhPc6 from '../assets/learn_home/lh_pc6.png'
import lhPc7 from '../assets/learn_home/lh_pc7.png'
import lhPc8 from '../assets/learn_home/lh_pc8.png'
import lhMobile from '../assets/learn_home/lh_mobile.png'
import palette from '../assets/learn_home/palette.png'

const LearnHome = () => {
  document.title = 'Aïssetou SACKO - Learn@Home'

  return (
    <div className="learn">
      <h1>Learn@Home</h1>
      <img src={lhLogo} alt="Logo Learn@Home" className="learn__cover" />

      <p className="learn__presentation">
        Learn@Home est une application de soutien scolaire permettant à un
        bénévole et un élève de communiquer entre eux. L'objectif de ce projet a
        été de concevoir le design du site web et de le rendre accessible sur un
        ordinateur ou un smartphone.
      </p>

      <div className="learn__section1">
        <img src={lhPc} alt="Maquette PC" />
        <p>
          Avec cette application, le bénévole et l'élève peuvent accéder à
          plusieurs fonctionnalités en se connectant. Ils peuvent accéder à un
          calendrier et y ajouter des évènements, créer des tâches et les
          catégoriser dans des listes, et communiquer à travers une messagerie.
        </p>
      </div>

      <div className="learn__sketch-pc">
        <img src={lhPc1} alt="Maquette PC" />
        <img src={lhPc2} alt="Maquette PC" />
        <img src={lhPc3} alt="Maquette PC" />
        <img src={lhPc4} alt="Maquette PC" />
        <img src={lhPc5} alt="Maquette PC" />
        <img src={lhPc6} alt="Maquette PC" />
        <img src={lhPc7} alt="Maquette PC" />
        <img src={lhPc8} alt="Maquette PC" />
      </div>

      <div className="learn__section2">
        <p>Cette maquette a été réalisée avec l'outil de design Figma.</p>
        <img src={lhMobile} alt="Maquette mobile" />
      </div>

      <div className="learn__palette">
        <img src={palette} alt="Palette de couleurs" />
      </div>
    </div>
  )
}

export default LearnHome
