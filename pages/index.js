import Head from 'next/head'
import Globe from '../components/home/Globe'
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
                <Overlay_1 />

                <section id='hero'>
                    <Globe />
                    <div className='heading'>
                        <h1>Innovative 3D Web Development Tailored to Your Business Needs</h1>
                        <p>As a skilled web developer, I specialize in creating bespoke websites enhanced with 3D elements, making your online presence truly unique.</p>
                        <button className='button'>Experience the Difference with 3D Web Development</button>
                    </div>
                </section>
            </main>
        </>
    )
}