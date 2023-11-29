import Image from 'next/image'
import React from 'react'
import hrnetDisplay from 'public/hrnet/hrnet_display.png'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'

const HRNet = () => {
  return (
    <div className="hrnet">
      <h1>HRNet</h1>

      <div className="hrnet__infos">
        <Image
          src={hrnetDisplay}
          width={750}
          height={560}
          sizes="(min-width: 500px) 750px, 460px"
          alt="Cover HRNet"
        />

        <div className="hrnet__infosRight">
          <p className="hrnet__description">
            HRNet est une application web de l&apos;entreprise Wealth Health qui
            permet de renseigner les informations d&apos;un employé et
            d&apos;afficher la liste des employés dans un tableau.
            L&apos;objectif a été de convertir le projet, qui a été initialement
            développé en jQuery, vers une application développée avec React JS.
          </p>

          <div className="tags">
            <p className="tech">ReactJS</p>
            <p className="tech">MUI</p>
            <p className="tech">Formik</p>
            <p className="tech">SASS</p>
          </div>

          <div className="hrnet__infosPart2">
            <div className="hrnet__date">
              <h3>Date</h3>
              <p>2022</p>
            </div>

            <div className="hrnet__type">
              <h3>Type de projet</h3>
              <p>Projet de formation</p>
            </div>
          </div>

          <p className="tagDev">Front - End</p>
        </div>
      </div>

      <div className="iconsDiv">
        <Link
          href="https://oc-14-hrnet.vercel.app/"
          target={'_blank'}
          className="icon"
        >
          <FaLink />
        </Link>
        <Link
          href="https://github.com/aissetousacko/OC_14_HRnet.git"
          target={'_blank'}
          className="icon"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  )
}

export default HRNet
