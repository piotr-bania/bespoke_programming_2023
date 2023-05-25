import Head from 'next/head'
import GearAndPen from '../components/process/GearAndPen'
import ConstructionSite from '../components/process/ConstructionSite'
import MagnifyingGlass from '../components/process/MagnifyingGlass'
import Rocket from '../components/process/Rocket'
import Overlay_3 from '../components/layout/Overlay_3'

export default function Process() {
    return (
        <>
            <Head>
                <title>Bespoke Programming | Freelance Developer | London</title>
                <meta name="description" content="Bespoke Programming | Freelance Developer | London" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <Overlay_3 />

                <section>
                    <GearAndPen />
                    <h4>Information Gathering & Planning</h4>
                    <p>I take the time to understand your vision, plan meticulously, and lay the groundwork for your 3D-enhanced website.</p>
                </section>

                <section>
                    <ConstructionSite />
                    <h4>Build</h4>
                    <p>I design and develop your website, employing the latest 3D technologies for a truly engaging user experience.</p>
                </section>

                <section>
                    <MagnifyingGlass />
                    <h4>Testing</h4>
                    <p>I rigorously test all aspects of your website, ensuring optimal performance and seamless user interaction with 3D elements.</p>
                </section>

                <section>
                    <Rocket />
                    <h4>Launch & Maintenance</h4>
                    <p>I unveil your 3D-enhanced website to the world and provide ongoing support to keep it fresh and engaging.</p>
                </section>
            </main>
        </>
    )
}