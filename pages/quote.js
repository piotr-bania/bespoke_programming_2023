import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Overlay_1 from '../components/layout/Overlay_1'
import Quotation from '../components/quote/Quotation'

export default function Faq() {
    return (
        <>
            <Head>
                <title>Bespoke Programming | Freelance Developer | London</title>
                <meta name="description" content="Bespoke Programming | Freelance Developer | London" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/svg/logo.svg" />
            </Head>

            <m.main
                initial={{opacity: 0, transition: {duration: 1}}}
                animate={{opacity: 1, transition: {delay: 1, duration: 1}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                transition={{duration: 1, ease: 'easeOut'}}
                >
                <Overlay_1 />

                <section id='form'>
                    <div className='heading'>
                        <h2>Request a Quote</h2>
                        <p>Interested in elevating your online presence with a bespoke 3D website? Let's get started. Provide some details about your project below, and I'll get back to you with a personalized quote.</p>
                    </div>
                </section>

                <Quotation />
            </m.main>
        </>
    )
}