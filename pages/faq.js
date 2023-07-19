import Head from 'next/head'
import Link from 'next/link'
import { motion as m } from 'framer-motion'
import Questions from '../components/faq/Questions'
import Overlay_4 from '../components/layout/Overlay_4'

export default function Faq() {

    const faqItems = [
        {
            title: <h4>"Why should I choose a 3D website?"</h4>,
            content: <p>"A 3D website can provide an engaging and interactive experience for your users. It adds depth to your website's design, making it more memorable and impactful. 3D elements can be used to tell a story, showcase a product, or provide a unique navigation experience."</p>
        },
        {
            title: <h4>"What is React Three Fiber and how does it enhance my website?"</h4>,
            content: <p>"React Three Fiber is a React renderer for Three.js, a popular JavaScript library for creating 3D graphics. It allows me to integrate 3D elements into a website in a more efficient and react-friendly way. This results in a smoother, more interactive user experience."</p>
        },
        {
            title: <h4>"Will a 3D website affect my website's loading speed?"</h4>,
            content: <p>"3D elements can be more resource-intensive than 2D ones, but this doesn't mean they will necessarily slow down your site. I use various optimization techniques, like code splitting, lazy loading, and efficient animation loops, to ensure the 3D elements load smoothly and quickly."</p>
        },
        {
            title: <h4>"Can I update my website's content easily if it's hand-coded?"</h4>,
            content: <p>"While hand-coded websites don't have a Content Management System's built-in interface for updates, I can build a custom solution for you to manage your content. Additionally, I offer maintenance services where I can handle updates for you."</p>
        },
        {
            title: <h4>"What if I already have a design for my website?"</h4>,
            content: <p>"If you already have a design ready, that's great! I offer a service where I can turn your design into a fully functional website, complete with 3D elements if desired."</p>
        },
        {
            title: <h4>"How long does it typically take to build a website?"</h4>,
            content: <p>"The timeline for a project can vary greatly depending on its complexity and the scope of work. Once I understand your project's needs, I can provide a more accurate estimate."</p>
        },
        {
            title: <h4>"How much will my project cost?"</h4>,
            content: <p>"Each project is unique, so the cost can vary. I've provided starting prices for each service on my services page, but for a more accurate quote, please get in touch so we can discuss your specific needs."</p>
        },
    ]
    
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
                <Overlay_4 />

                <section id='faq'>
                    <div className='heading'>
                        <h2>Frequently Asked Questions</h2>
                        <h3>Unveiling Answers to Your Inquiries About My Web Development Services</h3>
                        <p>I understand that you may have questions about my services and process. Below, I've provided answers to some of the most common inquiries I receive. If you can't find the information you're seeking, feel free to get in touch, and I'll be delighted to assist you further.</p>
                    </div>

                    <Questions items={faqItems} />

                    <div className='cta'>
                        <p>Don't see your question here? I'm just an email or a Telegram message away. I look forward to hearing from you!</p>
                        <Link className='link' href="/contact">
                            <button className='button'>Contact me</button>
                        </Link>
                    </div>
                </section>
            </m.main>
        </>
    )
}