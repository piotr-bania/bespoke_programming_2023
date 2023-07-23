import Head from 'next/head'
import { motion as m } from 'framer-motion'

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

                <section id='work'>

                    <div className='heading'>
                        <h2>My Portfolio</h2>
                        <h3>Explore Our Diverse Range of Projects</h3>
                        <p>My work showcases commitment to excellence in custom web development. Each project represents my dedication to creating unique, visually captivating, and functional web solutions.</p>
                    </div>

                    <div className='project project_1'>
                        <h4>Project 1</h4>
                        <p>Website redesign for a Tanzanian hedge fund, where I utilized CSS, Sass, React, Next, GLSL, Three.js, and React Three Fiber to create a captivating 3D experience.</p>
                    </div>
                    
                    <div className='project project_2'>
                        <h4>Project 2</h4>
                        <p>For my personal portfolio website, I showcased my skills in HTML, CSS, Sass, and the integration of 3D elements.</p>
                    </div>

                    <div className='project project_3'>
                        <h4>Project 3</h4>
                        <p>Website redesign for a Tanzanian hedge fund, where I utilized CSS, Sass, React, Next, GLSL, Three.js, and React Three Fiber to create a captivating 3D experience.</p>
                    </div>

                    <div className='project project_4'>
                        <h4>Project 4</h4>
                        <p>For my personal portfolio website, I showcased my skills in HTML, CSS, Sass, and the integration of 3D elements.</p>
                    </div>
                </section>
            </m.main>
        </>
    )
}