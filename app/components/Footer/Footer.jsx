import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 - Aïssetou SACKO, Tous droits réservés.</p>
      <p>
        Fait avec <span className="footer__heart">&hearts;</span>
      </p>
    </footer>
  )
}

export default Footer
