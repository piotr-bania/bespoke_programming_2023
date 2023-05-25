import Head from 'next/head'
import Hero from '../components/home/Globe'
import Overlay_1 from '../components/layout/Overlay_1'

export default function Home() {
    return (
        <>
            <Head>
                <title>Bespoke Programming | Freelance Developer | London</title>
                <meta name="description" content="Bespoke Programming | Freelance Developer | London" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <main>
                <Hero />
                <Overlay_1 />
            </main>
        </>
    )
}