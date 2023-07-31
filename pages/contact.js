import React, {useState} from 'react'
import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Link from 'next/link'

export default function Blog() {

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        description: '',
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

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

                <section id='contact'>
                    <div className='heading'>
                        <h2>Let's Connect</h2>
                        <h3>and Bring Your Vision to Life</h3>
                        <p>Reach Out for a Truly Custom Web Solution</p>
                    </div>

                    <div className='contact_1'>
                        <p>Have questions or ready to discuss your project? I'm eagerly waiting to hear from you. <br /> Reach out through the contact form or the provided contact details, and together, we'll embark on an exciting journey to elevate your web presence and achieve extraordinary results.</p>
                    </div>

                    <div className='contact_2'>
                        <p>Need to discuss a project, ask a question, or just say hello? Reach out to me via email at <Link href="mailto:contact@bespokeprogramming.net">contact@bespokeprogramming.net</Link> or on Telegram at <Link href="t.me/bespokeprogramming" target="_blank">
                            t.me/bespokeprogramming
                        </Link>.</p><br />
                        
                        <p>I'm available from Monday to Friday, 09:00-17:00 GMT, and Saturday to Sunday, 09:00-13:00 GMT. I look forward to hearing from you!</p>
                    </div>

                    <form id='form' method="POST" action="https://formsubmit.co/contact@bespokeprogramming.net">

                        <h2 className='subheader'>Write To Me</h2>
                        
                        <div className='details'>
                            <h4>Your Name and Contact Details</h4>
                            
                            <input className='small' type="text" name="name" placeholder="Your Name" onChange={handleInputChange} required />
                            
                            <input className='small' type="text" name="name" placeholder="Company (if applicable)" onChange={handleInputChange} required />
                            
                            <input className='small' type="email" name="email" placeholder="Email Address" onChange={handleInputChange} required />
                            
                            <input className='small' type="tel" name="phoneNumber" placeholder="Contact Number" onChange={handleInputChange} required />
                        </div>

                        <div className='message'>
                            <h4>Your Message</h4>
                            <textarea className='large' name="otherElements" placeholder="How can I help?" onChange={handleInputChange} required />
                        </div>

                        <div className='send_message'>
                            <button className='button' type="submit">Send Message</button>
                        </div>
                    </form>
                </section>
            </m.main>
        </>
    )
}