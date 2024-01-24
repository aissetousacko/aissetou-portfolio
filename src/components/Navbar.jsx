'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/logo.png'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState('navbar__tabs')
  const [icon, setIcon] = useState('hamburger')

  const navToggle = () => {
    active === 'navbar__tabs'
      ? setActive('navbar__tabs active')
      : setActive('navbar__tabs')

    icon === 'hamburger' ? setIcon('hamburger active') : setIcon('hamburger')
  }

  const elementRefs = useRef([])

  useEffect(() => {
    // console.log(elementRefs.current)
    elementRefs.current.forEach((elt) => {
      elt.addEventListener('click', () => {
        setActive('navbar__tabs')
        setIcon('hamburger')
      })
    })
  }, [])

  return (
    <nav className="navbar">
      <Link href="/">
        <Image src={logo} alt="Logo" />
      </Link>
      <ul className={active}>
        <li>
          <Link
            href="/projets"
            className="navbar__item"
            ref={(el) => (elementRefs.current[0] = el)}
          >
            Projets
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="navbar__item"
            ref={(el) => (elementRefs.current[1] = el)}
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="navbar__item"
            ref={(el) => (elementRefs.current[2] = el)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className={icon} onClick={navToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  )
}

export default Navbar
