import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';

export const siteTitle = `Lilly's Asian Cafe`

const Layout: React.FC = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <Container className='layout'>
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
      <Container style={contentStyle}>
        {children}
      </Container>
      <Footer />
    </Container>
  )
}

const contentStyle = {
  textAlign: "center",
  height: "90%",
  width: "100%",
} as React.CSSProperties

export default Layout