import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}