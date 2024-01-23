import '../styles.scss'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Aïssetou SACKO - Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
