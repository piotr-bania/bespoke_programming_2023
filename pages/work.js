import Head from 'next/head'
import Link from 'next/link'
import { motion as m } from 'framer-motion'
import Featured_Project_Canvas_1 from '../components/work/Featured_Project_Canvas_1'
import Featured_Project_Canvas_2 from '../components/work/Featured_Project_Canvas_2'

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
                        <h3>Explore My Diverse Range of Projects</h3>
                        <p>My work showcases commitment to excellence in custom web development. Each project represents my dedication to creating unique, visually captivating, and functional web solutions.</p>
                    </div>

                    <div className='project project_1'>
                    <h4>Mara River Capital</h4>
                        <Link href="https://mara-river-capital-redesign-v2.vercel.app/" target="_blank">
                            <Featured_Project_Canvas_1 />
                        </Link>
                        <p className='magenta'>Website redesign for a Tanzanian hedge fund</p>
                        <br />
                        <p className='gradientBorder'>Website redesign for a Tanzanian hedge fund, where I utilized CSS, Sass, React, Next, GLSL, Three.js, and React Three Fiber to create a captivating 3D experience.</p>
                    </div>
                    
                    <div className='project project_2'>
                    <h4>Personal Portfolio</h4>
                        <Link href="https://piotrbania.dev/" target="_blank">
                            <Featured_Project_Canvas_2 />
                        </Link>
                        <p className='magenta'>The initial design of my personal portfolio website from 2021</p>
                        <br />
                        <p className='gradientBorder'>For my personal portfolio website, I showcased my skills in HTML, CSS, Sass, and the integration of 3D elements.</p>
                    </div>

                    {/* <div className='project project_3'>
                        <h4>Project 3</h4>
                        <p>Website redesign for a Tanzanian hedge fund, where I utilized CSS, Sass, React, Next, GLSL, Three.js, and React Three Fiber to create a captivating 3D experience.</p>
                    </div> */}

                    {/* <div className='project project_4'>
                        <h4>Project 4</h4>
                        <p>For my personal portfolio website, I showcased my skills in HTML, CSS, Sass, and the integration of 3D elements.</p>
                    </div> */}
                </section>
            </m.main>
        </>
    )
}