import Head from 'next/head'
import { motion as m } from 'framer-motion'
import GearAndPen from '../components/process/GearAndPen'
import ConstructionSite from '../components/process/ConstructionSite'
import MagnifyingGlass from '../components/process/MagnifyingGlass'
import Rocket from '../components/process/Rocket'
import Overlay_3 from '../components/layout/Overlay_3'

export default function Process() {
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
                <Overlay_3 />

                <section id='process'>
                    <div className='heading'>
                        <h2>Process</h2>
                        <p>Each project I undertake follows a carefully crafted process to ensure the best results. Here's how I work</p>
                    </div>

                    <div className='planning'>
                        <GearAndPen />
                        <h4>Information Gathering & Planning</h4>
                        <p className='gradientBorder'>I take the time to understand your vision, plan meticulously, and lay the groundwork for your 3D-enhanced website.</p>
                    </div>

                    <div className='build'>
                        <ConstructionSite />
                        <h4>Build</h4>
                        <p className='gradientBorder'>I design and develop your website, employing the latest 3D technologies for a truly engaging user experience.</p>
                    </div>

                    <div className='testing'>
                        <MagnifyingGlass />
                        <h4>Testing</h4>
                        <p className='gradientBorder'>I rigorously test all aspects of your website, ensuring optimal performance and seamless user interaction with 3D elements.</p>
                    </div>

                    <div className='maintenance'>
                        <Rocket />
                        <h4>Launch & Maintenance</h4>
                        <p className='gradientBorder'>I unveil your 3D-enhanced website to the world and provide ongoing support to keep it fresh and engaging.</p>
                    </div>
                </section>
            </m.main>
        </>
    )
}