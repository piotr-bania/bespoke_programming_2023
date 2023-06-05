import Head from 'next/head'
import Questions from '../components/faq/Questions'
import Overlay_4 from '../components/layout/Overlay_4'

export default function Faq() {
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

                <section id='faq'>
                    <div className='landing'>
                        <Questions />
                        <h3>Got questions?</h3>
                        <h4>You're not alone.</h4>
                        <p>Here are some of the most common questions I receive about my services and 3D web development. If you can't find the answer you're looking for, feel free to reach out directly.</p>

                        <h4 className='magenta'>Why should I choose a 3D website?</h4>
                        <p>A 3D website can provide an engaging and interactive experience for your users. It adds depth to your website's design, making it more memorable and impactful. 3D elements can be used to tell a story, showcase a product, or provide a unique navigation experience.</p>
                    </div>
                </section>
            </main>
        </>
    )
}