import Head from 'next/head'
import Link from 'next/link'
import { motion as m } from 'framer-motion'
import HeroCanvas from '../components/home/HeroCanvas'
import Featured_Project_Canvas_1 from '../components/work/Featured_Project_Canvas_1'
import Featured_Project_Canvas_2 from '../components/work/Featured_Project_Canvas_2'
import Process_1 from '../components/process/Process_1'
import Process_2 from '../components/process/Process_2'
import Process_3 from '../components/process/Process_3'
import Process_4 from '../components/process/Process_4'

export default function Home() {
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
                <HeroCanvas />

                <section id='hero'>
                    <div className='heading'>
                        <h1>Innovative Web Development Tailored to Your Business Needs</h1>
                        <p className='gradientBorder'>As a skilled web developer, I specialize in creating bespoke websites enhanced with 3D elements, making your online presence truly unique.</p>
                        <Link className='link' href="/work">
                            <button className='button'>View Latest Projects</button>
                        </Link>
                    </div>
                </section>

                <section id='quote'>
                    <div className='quote'>
                        <h2>I take pride in crafting <abbr className='magenta'>every aspect</abbr> of my projects <abbr className='indigo'>from scratch</abbr>, without relying on Content Management Systems.</h2>
                    </div>
                </section>

                <section id='services'>
                    <div className='heading'>
                        <h2>Services</h2>
                        <p>From custom landing pages to complex 3D animations, I offer a variety of web development services to meet your needs.</p>
                    </div>

                    <div className='div div_1'>
                        <h4>Bespoke 3D Website <abbr className='indigo'>⇀</abbr></h4>
                        <p className='gradientBorder'>Creating immersive web experiences with custom 3D elements tailored to your brand and objectives.</p>
                    </div>
                    
                    <div className='div div_2'>
                        <h4>Landing Page <abbr className='indigo'>⇀</abbr></h4>
                        <p className='gradientBorder'>Crafting visually captivating standalone web pages that drive conversions and engage users.</p>
                    </div>
                    
                    <div className='div div_3'>
                        <h4>Single Page Application <abbr className='indigo'>⇀</abbr></h4>
                        <p className='gradientBorder'>Building dynamic websites that seamlessly load new content without page reloads, enhancing user experience.</p>
                    </div>
                    
                    <div className='div div_4'>
                        <h4>Web Development from Your Design <abbr className='indigo'>⇀</abbr></h4>
                        <p className='gradientBorder'>Translating your unique design into a fully functional and responsive website, coded from scratch.</p>
                    </div>

                    <div className='div div_5'>
                        <h4>Website Maintenance <abbr className='indigo'>⇀</abbr></h4>
                        <p className='gradientBorder'>Ensuring your website remains up to date, secure, and optimized for peak performance, freeing you to focus on your business.</p>
                    </div>

                    <Link className='link services_button' href="/services">
                        <button className='button'>More Details and Pricing</button>
                    </Link>
                </section>

                <section id='work'>
                    <div className='heading'>
                        <h2>Featured Work</h2>
                        <p>Take a look at some of the unique web experiences I've crafted for my clients.</p>
                    </div>

                    <div className='div_1 work'>
                        <h4>Mara River Capital</h4>
                        <Link href="https://mara-river-capital-redesign-v2.vercel.app/" target="_blank">
                            <Featured_Project_Canvas_1 />
                        </Link>
                        <p className='magenta'>Website redesign for a Tanzanian hedge fund</p>
                        <br />
                        <p className='gradientBorder'>Website redesign for a Tanzanian hedge fund, where I utilized CSS, Sass, React, Next, GLSL, Three.js, and React Three Fiber to create a captivating 3D experience.</p>
                    </div>

                    <div className='div_2 work'>
                        <h4>Personal Portfolio</h4>
                        <Link href="https://piotrbania.dev/" target="_blank">
                            <Featured_Project_Canvas_2 />
                        </Link>
                        <p className='magenta'>The initial design of my personal portfolio website from 2021</p>
                        <br />
                        <p className='gradientBorder'>For my personal portfolio website, I showcased my skills in HTML, CSS, Sass, and the integration of 3D elements.</p>
                    </div>

                    <Link className='link work_button' href="/work">
                        <button className='button'>Other Projects</button>
                    </Link>
                </section>

                <section id='process'>
                    <div className='heading'>
                        <h2>My Process</h2>
                        <p>Efficient and transparent web development journey.</p>
                    </div>

                    <div className='div div_1'>
                        <div className='process_canvas'>
                            {/* <Process_1 /> */}
                        </div>
                        <h4>Information Gathering & Planning</h4>
                        <p className='gradientBorder'>I take the time to understand your vision, plan meticulously, and lay the groundwork for your 3D-enhanced website.</p>
                    </div>

                    <div className='div div_2'>
                        <div className='process_canvas'>
                            {/* <Process_2 /> */}
                        </div>
                        <h4>Build</h4>
                        <p className='gradientBorder'>I design and develop your website, employing the latest 3D technologies for a truly engaging user experience.</p>
                    </div>

                    <div className='div div_3'>
                        <div className='process_canvas'>
                            {/* <Process_3 /> */}
                        </div>
                        <h4>Testing</h4>
                        <p className='gradientBorder'>I rigorously test all aspects of your website, ensuring opimal performance and seamless user interaction with 3D elements.</p>
                    </div>

                    <div className='div div_4'>
                        <div className='process_canvas'>
                            {/* <Process_4 /> */}
                        </div>
                        <h4>Launch & Maintenance</h4>
                        <p className='gradientBorder'>I unveil your 3D-enhanced website to the world and provide ongoing support to keep it fresh and engaging.</p>
                    </div>

                    <Link className='link explore_button' href="/process">
                            <button className='button'>Explore the Journey</button>
                    </Link>
                </section>

                <section id='cta'>
                    <div className='cta'>
                        <h2>Ready to <abbr className='magenta'>elevate </abbr>your online presence? <abbr className='indigo'>Let's talk </abbr>about your project.</h2>
                    </div>
                </section>
            </m.main>
        </>
    )
}