import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export const siteTitle = `Lilly's Asian Cafe`

const Layout: React.FC = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='container layout'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Two Harbors Lilly's Asian Cafe Food Restaurant" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header
        restaurantName={siteTitle}
        phoneNumber='(218) 834-4373'
        hours='Open hours: 12:00PM - 3:00PM, 4:00PM - 7:30PM'
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout