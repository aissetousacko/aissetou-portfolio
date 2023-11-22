import '../styles/globals.scss'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

export const metadata = {
  title: 'Aïssetou SACKO - Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
