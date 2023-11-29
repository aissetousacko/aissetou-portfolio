'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <Image src={logo} alt="Logo" />
      </Link>
      <ul className="navbar__tabs">
        <li>
          <Link href="/">Projets</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
