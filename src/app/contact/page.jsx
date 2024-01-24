import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export const metadata = {
  title: 'Contact',
  description: 'Informations de contact',
}

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>

      <div className="contact__infos">
        <p>
          Envie de travailler ensemble ? N&apos;hésitez pas à me contacter !
        </p>

        <Link
          href="mailto:aissetou.sck@gmail.com"
          className="contact__iconbox"
          target="_blank"
        >
          <FaEnvelope />
        </Link>
      </div>

      <h2>Retrouvez-moi aussi sur les réseaux : </h2>
      <ul className="contact__network">
        <li>
          <Link
            href="https://www.linkedin.com/in/aissetou-sacko/"
            target="_blank"
            className="contact__iconbox"
          >
            <FaLinkedinIn />
          </Link>
        </li>

        <li>
          <Link
            href="https://github.com/aissetousacko"
            className="contact__iconbox"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Contact
