import Head from 'next/head'
import Monitor from '../components/services/Landing'
import SinglePageApp from '../components/services/Single'
import BespokeWebsite from '../components/services/Bespoke'
import Overlay_2 from '../components/layout/Overlay_2'

export default function Services() {
    return (
        <>
            <Head>
                <title>Bespoke Programming | Freelance Developer | London</title>
                <meta name="description" content="Bespoke Programming | Freelance Developer | London" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <Overlay_2 />

                <section id='services'>
                    <div className='landing'>
                        <Monitor />
                        <h4>Landing Page</h4>
                        <p>I craft stunning landing pages, incorporating 3D elements that captivate your audience and boost conversions.</p>
                    </div>

                    <div className='single'>
                        <SinglePageApp />
                        <h4>Single Page Application</h4>
                        <p>My single-page applications are interactive, dynamic, and enriched with 3D elements for an immersive user experience.</p>
                    </div>

                    <div className='bespoke'>
                        <BespokeWebsite />
                        <h4>Bespoke Website</h4>
                        <p>I hand-code unique websites from scratch, embedding 3D elements to perfectly align with your business vision.</p>
                    </div>
                </section>
            </main>
        </>
    )
}