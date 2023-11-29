import Head from 'next/head'
import '../styles.scss'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import lhDisplay from 'public/learn_home/lh_display.png'

export const metadata = {
  title: 'Aïssetou SACKO - Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" href={lhDisplay} as="image" />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
