import Head from 'next/head'
import Monitor from '../components/services/Landing'
import SinglePageApp from '../components/services/Single'
import BespokeWebsite from '../components/services/Bespoke'
import { motion as m } from 'framer-motion'
import Overlay_2 from '../components/layout/Overlay_2'

export default function Services() {
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
                <Overlay_2 />

                <section id='services'>

                    <div className='heading'>
                        <h2>My Services</h2>
                    </div>

                    <div className='subheading'>
                        <p>As a dedicated web developer, I provide a range of services tailored to meet your specific needs. Each project is hand-coded from scratch to ensure the highest level of quality and performance. Here's what I offer:</p>
                    </div>

                    <div className='bespoke'>
                        <BespokeWebsite />
                        <h4>Bespoke 3D Website Development</h4>
                        <p>Take your online presence to another dimension with a bespoke 3D website. I use React Three Fiber and Three.js to create engaging 3D elements and animations that will captivate your audience.</p>
                        <p className='magenta'><i>Pricing: Starts at £3000 per project, depending on complexity.</i></p>
                    </div>

                    <div className='single'>
                        <SinglePageApp />
                        <h4>Single Page Application Development</h4>
                        <p>For a seamless user experience, consider a single page application. I develop dynamic web applications that interact with users by dynamically rewriting the current page, delivering a smooth and engaging experience.</p>
                        <p className='magenta'><i>Pricing: Starts at £2000 per application.</i></p>
                    </div>

                    <div className='landing'>
                        <Monitor />
                        <h4>Landing Page Development</h4>
                        <p>A compelling landing page can convert visitors into customers. I create standalone landing pages that capture your brand's essence and encourage visitors to take action.</p>
                        <p className='magenta'><i>Pricing: Starts at £800 per page.</i></p>
                    </div>

                    <div className='landing'>
                        <Monitor />
                        <h4>Web Development from Your Design</h4>
                        <p>Have a design ready but need someone to bring it to life? I can translate your design into a fully functional, interactive website. I work closely with you to ensure the final product aligns with your vision and goals.</p>
                        <p className='magenta'><i>Pricing: Starts at £1500 per design.</i></p>
                    </div>

                    <div className='landing'>
                        <Monitor />
                        <h4>Website Maintenance</h4>
                        <p>Keep your website up-to-date and secure with my maintenance service. I offer regular updates, bug fixes, performance optimization, and more to ensure your website remains in top shape.</p>
                        <p className='magenta'><i>Pricing: £50 per hour.</i></p>
                    </div>
                </section>
            </m.main>
        </>
    )
}