import Image from 'next/image'
import React from 'react'
import hrnetDisplay from 'public/hrnet/hrnet_display.png'
import styles from 'styles/pages/Hrnet.module.scss'
import stylesTag from '../components/Tags/Tags.module.scss'
import stylesIcons from '../../styles/icons.module.scss'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'

const HRNet = () => {
  return (
    <div className={styles.hrnet}>
      <h1>HRNet</h1>

      <div className={styles.hrnet__infos}>
        <Image
          src={hrnetDisplay}
          width={750}
          height={560}
          sizes="(min-width: 500px) 750px, 460px"
          alt="Cover HRNet"
        />

        <div className={styles.hrnet__infosRight}>
          <p className={styles.hrnet__description}>
            HRNet est une application web de l&apos;entreprise Wealth Health qui
            permet de renseigner les informations d&apos;un employé et
            d&apos;afficher la liste des employés dans un tableau.
            L&apos;objectif a été de convertir le projet, qui a été initialement
            développé en jQuery, vers une application développée avec React JS.
          </p>

          {/* <Tags text="Figma" tag="tech" /> */}
          <div className={stylesTag.tags}>
            <p className={stylesTag.tech}>ReactJS</p>
            <p className={stylesTag.tech}>MUI</p>
            <p className={stylesTag.tech}>Formik</p>
            <p className={stylesTag.tech}>SASS</p>
          </div>

          <div className={styles.hrnet__infosPart2}>
            <div className={styles.hrnet__date}>
              <h1>Date</h1>
              <p>2022</p>
            </div>

            <div className={styles.hrnet__type}>
              <h1>Type de projet</h1>
              <p>Projet de formation</p>
            </div>
          </div>

          {/* <Tags text="UI Design" tag="tag-ui" /> */}
          <p className={stylesTag.tagDev}>Front - End</p>
        </div>
      </div>

      <div className={stylesIcons.iconsDiv}>
        <Link
          href="https://oc-14-hrnet.vercel.app/"
          target={'_blank'}
          className={stylesIcons.icon}
        >
          <FaLink />
        </Link>
        <Link
          href="https://github.com/aissetousacko/OC_14_HRnet.git"
          target={'_blank'}
          className={stylesIcons.icon}
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  )
}

export default HRNet
