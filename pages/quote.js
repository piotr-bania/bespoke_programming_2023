import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Quotation from '../components/quote/Quotation'
import Overlay_1 from '../components/layout/Overlay_1'

export default function Faq() {
    return (
        <>
            <Head>
                <title>Bespoke Programming | Freelance Developer | London</title>
                <meta name="description" content="Bespoke Programming | Freelance Developer | London" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/svg/logo.svg" />
                                
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-JH1ZN3CD7V"></script>
                <script>
                    window.dataLayer = window.dataLayer || []
                    function gtag() {
                        dataLayer.push(arguments)
                    }
                    gtag('js', new Date())
                    gtag('config', 'G-JH1ZN3CD7V')
                </script>
            </Head>

            <m.main
                initial={{opacity: 0, transition: {duration: 1}}}
                animate={{opacity: 1, transition: {delay: 1, duration: 1}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                transition={{duration: 1, ease: 'easeOut'}}
                >
                <Overlay_1 />

                <section>
                    <Quotation />
                    <h4>Get a Quote</h4>
                    <p>Feel free to add as much information as possible. The more you tell me, the more accurate I can be with your quote.</p>
                </section>
            </m.main>
        </>
    )
}