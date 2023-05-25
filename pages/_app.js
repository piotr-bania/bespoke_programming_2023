import '../styles/globals.scss'
import '../styles/layout/navbar.scss'
import '../styles/layout/footer.scss'
import '../styles/layout/strips.scss'

// Layouts
import Layout from '../components/layout/Layout.js'

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}