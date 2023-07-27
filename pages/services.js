import Head from 'next/head'
import { motion as m } from 'framer-motion'

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

                <section id='services'>

                    <div className='heading'>
                        <h2>My Services</h2>
                        <p>As a dedicated web developer, I provide a range of services tailored to meet your specific needs. Each project is hand-coded from scratch to ensure the highest level of quality and performance. Here's what I offer:</p>
                    </div>

                    <div className='bespoke'>
                        <h4>Bespoke 3D Website</h4>
                        <p className='gradientBorder'>Elevate your online presence with an exceptional bespoke 3D website. I harness the power of React Three Fiber and Three.js to craft mesmerizing 3D elements and animations that enthrall your audience.</p>
                        <p className='magenta'><p>Investment:</p> Starting at £3000 per project, subject to project complexity and customization.</p>
                    </div>

                    <div className='single'>
                        <h4>Single Page Application</h4>
                        <p className='gradientBorder'>Seamless user experiences await with a meticulously designed single page application. Through dynamic page rewriting, I deliver fluid interactions that engage users and elevate your online interactions.
</p>
                        <p className='magenta'><p>Investment:</p> Starting at £2000 per application, tailored to match the intricacy and sophistication of your application.</p>
                    </div>

                    <div className='landing'>
                        <h4>Landing Page</h4>
                        <p className='gradientBorder'>Maximize conversions with a compelling landing page that embodies your brand's essence. My expertise lies in crafting standalone landing pages that inspire action and leave a lasting impression.
</p>
                        <p className='magenta'><p>Investment:</p> Starting at £800 per page, ensuring your landing page exudes professionalism and captivates your visitors.</p>
                    </div>

                    <div className='design'>
                        <h4>Web Development from Your Design</h4>
                        <p className='gradientBorder'>Bring your vision to life with precision and artistry. If you possess a design that speaks to your identity, I transform it into a fully functional, interactive website - a masterpiece that resonates with your audience.
</p>
                        <p className='magenta'><p>Investment:</p> Starting at £1500 per design, providing you with a customized web solution that aligns seamlessly with your creative direction.</p>
                    </div>

                    <div className='maintenance'>
                        <h4>Website Maintenance</h4>
                        <p className='gradientBorder'>Ensure your online presence remains at its peak with diligent website maintenance. My commitment lies in delivering regular updates, resolving issues, optimizing performance, and safeguarding your digital investment.
</p>
                        <p className='magenta'><p>Investment:</p> £50 per hour, empowering you with peace of mind as I safeguard the continuity and reliability of your website.</p>
                    </div>
                </section>
            </m.main>
        </>
    )
}