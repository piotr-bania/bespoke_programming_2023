import Head from 'next/head'
import Quotation from '../components/quote/Quotation'
import Overlay_1 from '../components/layout/Overlay_1'

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
                <Overlay_1 />

                <section>
                    <Quotation />
                    <h4>Get a Quote</h4>
                    <p>Feel free to add as much information as possible. The more you tell me, the more accurate I can be with your quote.</p>
                </section>
            </main>
        </>
    )
}