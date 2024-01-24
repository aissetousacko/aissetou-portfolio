'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/logo.png'
import { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState('navbar__tabs')
  const [icon, setIcon] = useState('hamburger')
  const tabs = document.querySelectorAll('.navbar__tabs')

  const navToggle = () => {
    active === 'navbar__tabs'
      ? setActive('navbar__tabs active')
      : setActive('navbar__tabs')

    icon === 'hamburger' ? setIcon('hamburger active') : setIcon('hamburger')

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        setActive('navbar__tabs')
      })
    })
  }

  return (
    <nav className="navbar">
      <Link href="/">
        <Image src={logo} alt="Logo" />
      </Link>
      <ul className={active}>
        <li>
          <Link href="/projets" className="navbar__item">
            Projets
          </Link>
        </li>
        <li>
          <Link href="/about" className="navbar__item">
            À propos
          </Link>
        </li>
        <li>
          <Link href="/contact" className="navbar__item">
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
