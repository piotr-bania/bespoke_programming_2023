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

                <section>
                    <Questions />
                    <h4>FAQ</h4>
                    <p>Answers to your questions.</p>
                </section>
            </main>
        </>
    )
}