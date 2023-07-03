import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Book from '../components/blog/Book'
import Overlay_2 from '../components/layout/Overlay_2'

export default function Blog() {
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
                <Overlay_2 />

                <section>
                    <Book />
                    <h4>Post 1</h4>
                    <p>The Impact of 3D Elements on Your Website's User Experience</p>
                    <h4>Post 2</h4>
                    <p>Why Your Business Website Needs 3D Elements</p>
                    <h4>Post 3</h4>
                    <p>Case Study: Revitalizing a Website with 3D Elements</p>
                </section>
            </m.main>
        </>
    )
}