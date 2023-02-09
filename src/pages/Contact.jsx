import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>

      <div className="contact__infos">
        <p>Aïssetou SACKO</p>
        <p>Saint Ouen l'Aumône, France</p>
        <p>aissetou.sck@gmail.com</p>
      </div>

      <ul className="contact__network">
        <li>
          <Link
            to="https://www.linkedin.com/in/aissetou-sacko/"
            target="_blank"
            className="contact__iconbox"
          >
            <FaLinkedinIn />
          </Link>
        </li>

        <li>
          <Link
            to="https://github.com/aissetousacko"
            className="contact__iconbox"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </li>

        <li>
          <Link
            to="mailto:aissetou.sck@gmail.com"
            className="contact__iconbox"
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
