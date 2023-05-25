import Head from 'next/head'
import Mailbox from '../components/contact/Mailbox'
import Overlay_3 from '../components/layout/Overlay_3'

export default function Blog() {
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
                    <Mailbox />
                    <h4>Email:</h4>
                    <p>Ready to elevate your website with 3D elements? Let's talk! Reach me at <a href="mailto:contact@bespokeprogramming.net">contact@bespokeprogramming.net</a>.</p>
                    <h4>Office Hours:</h4>
                    <p>I'm available from Monday to Friday, 9.00-17.00 GMT, and Saturday to Sunday, 9.00-13.00 GMT.</p>
                </section>
            </main>
        </>
    )
}