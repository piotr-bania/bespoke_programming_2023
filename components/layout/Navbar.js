import React from 'react'
import Link from 'next/link'
import LogoCanvas from '../navbar/LogoCanvas'

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <LogoCanvas />
            </Link>

            <div>
                <li className='menu'>
                    <Link className='link' href="/services">Services</Link>
                    <Link className='link' href="/process">Process</Link>
                    <Link className='link' href="/work">Work</Link>
                    <Link className='link' href="/about">About</Link>
                    <Link className='link' href="/blog">Blog</Link>
                    <Link className='link' href="/contact">Contact</Link>
                    <Link className='link' href="/faq">FAQ</Link>
                </li>
                
                <Link href="/quote">
                    <button className='button'>Get Free Quote</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar