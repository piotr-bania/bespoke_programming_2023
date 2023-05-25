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
                <Overlay_4 />

                <section>
                    <Carousel />
                    <h4>Project 1</h4>
                    <p>Website redesign for a Tanzanian hedge fund, where I utilized CSS, Sass, React, Next, GLSL, Three.js, and React Three Fiber to create a captivating 3D experience.</p>
                    <h4>Project 2</h4>
                    <p>For my personal portfolio website, I showcased my skills in HTML, CSS, Sass, and the integration of 3D elements.</p>
                </section>
            </main>
        </>
    )
}