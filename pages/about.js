import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Overlay_1 from '../components/layout/Overlay_1'

export default function About() {
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
                    <h4>I am a self-taught web developer based in London, UK. I am passionate about coding, 3D web development, and translating designs into front-end code that creates engaging digital environments.</h4>
                    <p>I am proficient with HTML5, CSS3, JavaScript, Node.js, React.js, Next.js, and have 7+ years of experience with WordPress. My specialty lies in integrating 3D elements into web development projects.</p>
                </section>
            </m.main>
        </>
    )
}