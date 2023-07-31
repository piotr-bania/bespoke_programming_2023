import Head from 'next/head'
import Link from 'next/link'
import { motion as m } from 'framer-motion'

export default function About() {
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
                
                <section id='about'>
                    
                    <div className='heading'>
                        <h2>Bespoke Programming —</h2>
                        <h3>The Creative Force Behind Your Web Success</h3>
                        <p>Driving Innovation in Custom Web Solutions</p>
                    </div>

                    <div className='paragraph_1'>
                        <p>Welcome to <abbr className='magenta'>Bespoke Programming</abbr>, where passion meets expertise in web development. <br /><br /> I'm <abbr className='indigo'>Piotr</abbr>, a creative web developer dedicated to pushing the boundaries of creativity and innovation. At Bespoke Programming, I specialize in crafting custom, hand-coded projects that go beyond the limitations of pre-built templates. My mission is to deliver exceptional web experiences that truly represent your brand and captivate your audience.</p>
                    </div>

                    <div className='paragraph_2'>
                        <p>I believe that every website should be as unique as the business it represents. By combining technical expertise with a deep understanding of <abbr className='magenta'>your vision</abbr>, I create tailored web solutions that speak directly to your target audience. <br /><br /> From striking visuals to seamless user interactions, I strive to create a digital experience that sets you apart from the competition.</p>
                    </div>

                    <div className='paragraph_3'>
                        <p>At Bespoke Programming, I take pride in my commitment to excellence and attention to detail. <abbr className='indigo'>I stay up-to-date</abbr> with the latest industry trends and technologies to ensure that my clients receive cutting-edge solutions. <br /><br /> My hand-coded approach allows me to explore the full potential of web development, unleashing the power of creativity and interactivity.</p>
                    </div>

                    <div className='paragraph_4'>
                        <p>With a collaborative mindset, I work closely with my clients to understand their goals and transform their ideas into reality. I believe in building long-lasting partnerships based on trust, transparency, and effective communication. <br /><br /> <abbr className='magenta'>Your success is my success</abbr>, and I am dedicated to helping you achieve your web development objectives.</p>
                    </div>

                    <Link className='link quote_button' href="/quote">
                        <button className='button'>Get Free Quote</button>
                    </Link>
                </section>
            </m.main>
        </>
    )
}