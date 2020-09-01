import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Container from 'react-bootstrap/Container'

export const siteTitle = `Lilly's Asian Cafe`

const LayoutStyle = {
    backgroundColor: "#272e3b",
    padding: 0
}

const Layout: React.FC = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <Container className='layout' style={LayoutStyle}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Two Harbors Lilly's Asian Cafe Food Restaurant" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header
        restaurantName={siteTitle}
        phoneNumber='2188344373'
        hours='12:00PM - 3:00PM, 4:00PM - 7:30PM'
      />
        {children}
      <Footer />
    </Container>
  )
}



export default Layout