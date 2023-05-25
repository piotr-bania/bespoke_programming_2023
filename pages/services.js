import Head from 'next/head'
import Monitor from '../components/services/Monitor'
import SinglePageApp from '../components/services/SinglePageApp'
import BespokeWebsite from '../components/services/BespokeWebsite'
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
                <Monitor />
                <SinglePageApp />
                <BespokeWebsite />
                <Overlay_2 />
            </main>
        </>
    )
}