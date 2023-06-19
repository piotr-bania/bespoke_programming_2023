import Head from 'next/head'
import Link from 'next/link'
import Overlay_1 from '../components/layout/Overlay_1'
import DnaCanvas from '../components/home/DnaCanvas'

export default function Home() {
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
                {/* <DnaCanvas /> */}

                <section id='hero'>
                    <div className='heading'>
                        <h1>Innovative 3D Web Development Tailored to Your Business Needs</h1>
                    </div>

                    <div className='subheading'>
                        <p className='gradientBorder'>As a skilled web developer, I specialize in creating bespoke websites enhanced with 3D elements, making your online presence truly unique.</p>
                        <Link className='link' href="/work">
                            <button className='button'>View Latest Projects</button>
                        </Link>
                    </div>
                </section>

                <section id='quote'>
                    <div className='heading'>
                        <h2>I take pride in crafting <abbr className='magenta'>every aspect</abbr> of my projects <abbr className='indigo'>from scratch</abbr>, without relying on Content Management Systems.</h2>
                    </div>
                </section>

                <section id='services'>
                    <div className='heading'>
                        <h3>Services</h3>
                        <p>From custom landing pages to complex 3D animations, I offer a variety of web development services to meet your needs.</p>
                        <Link className='link' href="/services">
                            <button className='button'>go to services page</button>
                        </Link>
                    </div>

                    <div className='div div_1'>
                        <h4>Bespoke 3D Website <abbr className='indigo'>⇀</abbr></h4>
                        <p>Creating immersive web experiences with custom 3D elements tailored to your brand and objectives.</p>
                    </div>
                    
                    <div className='div div_2'>
                        <h4>Landing Page <abbr className='indigo'>⇀</abbr></h4>
                        <p>Crafting visually captivating standalone web pages that drive conversions and engage users.</p>
                    </div>
                    
                    <div className='div div_3'>
                        <h4>Single Page Application <abbr className='indigo'>⇀</abbr></h4>
                        <p></p>
                    </div>
                    
                    <div className='div div_4'>
                        <h4>Web Development from Your Design <abbr className='indigo'>⇀</abbr></h4>
                        <p></p>
                    </div>

                    <div className='div div_5'>
                        <h4>Website Maintenance <abbr className='indigo'>⇀</abbr></h4>
                        <p></p>
                    </div>
                </section>

                <section>
                    <p>Take a look at some of the unique web experiences I've crafted for my clients. (Link to Work page for more details)</p>
                </section>

                <section className='quote'>
                    <h2>Ready to elevate your online presence? Let's talk about your project.</h2>
                </section>
            </main>
        </>
    )
}