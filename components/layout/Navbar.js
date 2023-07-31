import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LogoCanvas from '../navbar/LogoCanvas'
import {motion as m} from 'framer-motion'

const variants = {
    open: {opacity: 1, x: '15%'},
    closed: {opacity: 0, x: "20%"},
}

const Navbar = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleRouteChange = () => {
            setIsOpen(false)
        }

        router.events.on('routeChangeStart', handleRouteChange)

        // Clean up the event listener on unmount
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router.events])

    return (
        <section id='navbar' className='navbar'>
            <Link href="/">
                <LogoCanvas />
            </Link>

            <nav className={`menu ${isOpen ? 'open' : 'closed'}`} onClick={() => setIsOpen(!isOpen)} >
                <svg className='line top'></svg>
                <svg className='line middle'></svg>
                <svg className='line bottom'></svg>
            </nav>

            <m.li className='menu_container'>
                <m.div 
                    className='menu_links'
                    initial='closed'
                    animate={isOpen ? 'open' : 'closed'}
                    variants={variants}
                    transition={{duration: 0.75, ease: 'easeOut', delay: 0.5}}
                    >
                    <Link className='link' href="/services"><h2>Services</h2></Link>
                    <Link className='link' href="/process"><h2>Process</h2></Link>
                    <Link className='link' href="/work"><h2>Work</h2></Link>
                    <Link className='link' href="/about"><h2>About</h2></Link>
                    {/* <Link className='link' href="/blog"><h2>Blog</h2></Link> */}
                    <Link className='link' href="/contact"><h2>Contact</h2></Link>
                    <Link className='link' href="/faq"><h2>FAQ</h2></Link>
                    <Link className='link' href="/quote">
                        <button className='button'>Get Free Quote</button>
                    </Link>
                </m.div>
            </m.li>
        </section>
    )
}

export default Navbar