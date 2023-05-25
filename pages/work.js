import Head from 'next/head'
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
            </Head>

            <main>
                <Carousel />
                <Overlay_4 />
            </main>
        </>
    )
}