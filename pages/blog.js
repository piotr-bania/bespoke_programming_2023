import Head from 'next/head'
import { motion as m } from 'framer-motion'

export default function Blog() {
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

                <section id='blog'>
                    
                    <div className='heading'>
                        <h2>Blog</h2>
                        <h3>Explore Insights and Inspiration from My Blog</h3>
                        <p>Stay Informed and Inspired in the World of Web Development</p>
                    </div>
                    
                    <div className='div_1 blog'>
                        <h4>Post 1</h4>
                        <p>The Impact of 3D Elements on Your Website's User Experience</p>
                    </div>
                    
                    <div className='div_2 blog'>
                        <h4>Post 2</h4>
                        <p>Why Your Business Website Needs 3D Elements</p>
                    </div>

                    <div className='div_3 blog'>
                        <h4>Post 3</h4>
                        <p>Case Study: Revitalizing a Website with 3D Elements</p>
                    </div>

                    <div className='div_4 blog'>
                        <h4>Post 4</h4>
                        <p>How to Create a 3D Website</p>
                    </div>  
                </section>
            </m.main>
        </>
    )
}