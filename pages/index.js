import Head from 'next/head'
import Overlay_1 from '../components/layout/Overlay_1'
import DnaCanvas from '../components/home/DnaCanvas'

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
                <DnaCanvas />

                {/* <section id='hero'>
                    <div className='heading'>
                        <h1>Innovative 3D Web Development Tailored to Your Business Needs</h1>
                    </div>

                    <div className='subheading'>
                        <p className='gradientBorder'>As a skilled web developer, I specialize in creating bespoke websites enhanced with 3D elements, making your online presence truly unique.</p>
                        <button className='button'>Experience the Difference</button>
                    </div>
                </section>

                <section className='quote'>
                    <h2>Welcome to Bespoke Programming.</h2>
                    <h4>I'm a London-based web developer specialising in creating interactive 3D web experiences.</h4>
                    <p>I bring your ideas to life using cutting-edge technologies like React, Next.js, and Three.js.</p>
                </section>

                <section>
                    <p>From custom landing pages to complex 3D animations, I offer a variety of web development services to meet your needs. (Link to Services page for more details)</p>
                </section>

                <section>
                    <p>Take a look at some of the unique web experiences I've crafted for my clients. (Link to Work page for more details)</p>
                </section>

                <section className='quote'>
                    <h2>Ready to elevate your online presence? Let's talk about your project.</h2>
                </section> */}
            </main>
        </>
    )
}