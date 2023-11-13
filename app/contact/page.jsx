import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import styles from 'styles/pages/Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>

      <div className={styles.contact__infos}>
        <p>Aïssetou SACKO</p>
        <p>Saint Ouen l&apos;Aumône, France</p>
        <p>aissetou.sck@gmail.com</p>
      </div>

      <ul className={styles.contact__network}>
        <li>
          <Link
            href="https://www.linkedin.com/in/aissetou-sacko/"
            target="_blank"
            className={styles.contact__iconbox}
          >
            <FaLinkedinIn />
          </Link>
        </li>

        <li>
          <Link
            href="https://github.com/aissetousacko"
            className={styles.contact__iconbox}
            target="_blank"
          >
            <FaGithub />
          </Link>
        </li>

        <li>
          <Link
            href="mailto:aissetou.sck@gmail.com"
            className={styles.contact__iconbox}
            target="_blank"
          >
            <FaEnvelope />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Contact
