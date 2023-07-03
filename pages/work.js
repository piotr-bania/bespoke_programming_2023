import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Carousel from '../components/work/Carousel'
import Overlay_4 from '../components/layout/Overlay_4'

export default function Process() {
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
                <Overlay_4 />

                <section>
                    <Carousel />
                    <h4>Project 1</h4>
                    <p>Website redesign for a Tanzanian hedge fund, where I utilized CSS, Sass, React, Next, GLSL, Three.js, and React Three Fiber to create a captivating 3D experience.</p>
                    <h4>Project 2</h4>
                    <p>For my personal portfolio website, I showcased my skills in HTML, CSS, Sass, and the integration of 3D elements.</p>
                </section>
            </m.main>
        </>
    )
}