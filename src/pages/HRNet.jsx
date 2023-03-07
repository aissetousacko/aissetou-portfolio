import React from 'react'
import { Link } from 'react-router-dom'
import hrnetLogo from '../assets/hrnet/hrnet_logo.png'
import hrnetCreateV1 from '../assets/hrnet/hrnet_create_v1.png'
import hrnetCreateV2 from '../assets/hrnet/hrnet_create_v2.png'
import hrnetEmployeeV1 from '../assets/hrnet/hrnet_employees_v1.png'
import hrnetEmployeeV2 from '../assets/hrnet/hrnet_employees_v2.png'
import hrnetPalette from '../assets/hrnet/hrnet_palette.png'
import { FaLink } from 'react-icons/fa'

const HRNet = () => {
  document.title = 'Aïssetou SACKO - HRNet'
  return (
    <div className="hrnet">
      <h1>HRNet</h1>
      <img src={hrnetLogo} alt="Logo HRNet" className="hrnet__logo" />

      <div className="hrnet__presentation">
        <p>
          HRNet est une application web de l'entreprise Wealth Health qui permet
          de renseigner les informations d'un employé et d'afficher la liste des
          employés dans un tableau. L'objectif a été de convertir le projet, qui
          a été initialement développé en jQuery, vers une application
          développée avec React JS.
        </p>
      </div>

      <div className="hrnet__section1">
        <p>
          Le site développé en jQuery avait des problèmes de performances et ne
          contenait pas de style. Dans la nouvelle version, du style a été
          ajouté et les bugs ont été fixés. Dans ce projet, 4 fonctionnalités
          posaient problème dans l'ancienne version. Dans le formulaire de
          création d'un employé, le <b>sélecteur de date</b>,{' '}
          <b>les menus déroulants</b> et <b>la modale de confirmation</b>{' '}
          posaient souci tandis que dans la page de visualisation des employés
          c'était <b>la table de données.</b>
        </p>

        <div className="hrnet__screens">
          <div className="hrnet__screens--old-version">
            <p>Ancienne version</p>
            <div className="hrnet__screens--img">
              <img
                src={hrnetCreateV1}
                alt="Ancienne version de la page de création"
                className="hrnet__screens--old-img-1"
              />
              <img
                src={hrnetEmployeeV1}
                alt="Ancienne version de la page des employés"
                className="hrnet__screens--old-img-2"
              />
            </div>
          </div>
          <div className="hrnet__screens--new-version">
            <p>Nouvelle version</p>
            <div className="hrnet__screens--img-new">
              <img
                src={hrnetCreateV2}
                alt="Nouvelle version de la page de création"
                className="hrnet__screens--new-img-1"
              />
              <img
                src={hrnetEmployeeV2}
                alt="Nouvelle version de la page des employés"
                className="hrnet__screens--new-img-2"
              />
            </div>
          </div>
        </div>

        <div className="hrnet__palette">
          <img src={hrnetPalette} alt="Palette de couleurs du site" />
        </div>
      </div>

      <div className="hrnet__section2">
        <p>
          Les 4 fonctionnalités qui ralentissaient le site ont été convertis en
          composants dans la nouvelle version du site pour permettre d'améliorer
          la performance du site. Pour simplifier la mise en place de ces
          composants, j'ai utilisé des librairies :
        </p>

        <ul className="hrnet__list">
          <li className="hrnet__list-items">
            <Link
              to="https://formik.org/"
              className="hrnet__list-items--title"
              target={'_blank'}
            >
              Formik :
            </Link>{' '}
            Permet de générer un formulaire avec React JS. Grâce à cette
            librairie, <b>le sélecteur de date</b> et{' '}
            <b>les menus déroulants</b> sont pris en compte et rends le code
            plus maintenable.
          </li>
          <li className="hrnet__list-items">
            <Link
              to="https://github.com/jquense/yup"
              className="hrnet__list-items--title"
              target={'_blank'}
            >
              Yup :
            </Link>{' '}
            Cette librairie permet de gérer la validation d'un formulaire.
          </li>
          <li className="hrnet__list-items">
            <Link
              to="https://mui.com/"
              className="hrnet__list-items--title"
              target={'_blank'}
            >
              MUI :
            </Link>{' '}
            C'est une librairie permettant de créer des composants et de les
            customiser. <b>La table de données</b> a été développé avec cette
            librairie.
          </li>
          <li className="hrnet__list-items">
            <Link
              to="https://react-redux.js.org/"
              className="hrnet__list-items--title"
              target={'_blank'}
            >
              React Redux :
            </Link>{' '}
            C'est un gestionnaire d'état pour les applications Javascript.
          </li>
        </ul>

        <p>
          La fonctionnalité de <b>la modale de confirmation</b> a été développée
          sans utiliser de librairie.
        </p>

        <Link
          to="https://oc-14-hrnet.vercel.app/"
          target={'_blank'}
          className="link"
        >
          <FaLink className="link__icon" />
          Voir le site
        </Link>
      </div>
    </div>
  )
}

export default HRNet
