import Head from 'next/head'
import Book from '../components/blog/Book'
import Overlay_2 from '../components/layout/Overlay_2'

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
                <Book />
                <Overlay_2 />
            </main>
        </>
    )
}