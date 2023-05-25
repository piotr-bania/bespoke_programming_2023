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
                <Mailbox />
                <Overlay_3 />
            </main>
        </>
    )
}