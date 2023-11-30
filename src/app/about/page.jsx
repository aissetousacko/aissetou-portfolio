import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="about">
      <h1>À propos de moi</h1>
      {/* Cover */}
      <p>Je suis Aïssetou, une développeuse web basée en région parisienne.</p>
      <p>
        Ma passion pour la programmation s&apos;étend sur tout le domaine du
        développement web, couvrant à la fois le front-end et le back-end,
        associée à mon plaisir de créer des designs pour le web.
      </p>
      <p>
        Mon approche n’est pas d’écrire seulement des lignes de code, mais
        plutôt de créer des interfaces à la fois intuitives et fonctionnelles
        afin de proposer une expérience utilisateur unique. Armée de ma
        curiosité et de mon esprit rigoureux, je souhaite améliorer mes
        compétences techniques et explorer l&apos;aspect esthétique du design.
      </p>
      <h2>Discutons ensemble !</h2>
      <Link href="/contact" className="tech">
        Contact
      </Link>
    </div>
  )
}

export default About
