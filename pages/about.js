import Head from 'next/head'
import Logo from '../components/about/Logo'
import Overlay_1 from '../components/layout/Overlay_1'

export default function About() {
    return (
        <>
            <Head>
                <title>Bespoke Programming | Freelance Developer | London</title>
                <meta name="description" content="Bespoke Programming | Freelance Developer | London" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <Overlay_1 />
                
                <section>
                    <Logo />
                    <h4>I am a self-taught web developer based in London, UK. I am passionate about coding, 3D web development, and translating designs into front-end code that creates engaging digital environments.</h4>
                    <p>I am proficient with HTML5, CSS3, JavaScript, Node.js, React.js, Next.js, and have 7+ years of experience with WordPress. My specialty lies in integrating 3D elements into web development projects.</p>
                </section>
            </main>
        </>
    )
}