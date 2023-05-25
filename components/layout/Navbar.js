import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <li>
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/process">Process</Link>
                <Link href="/work">Work</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/faq">FAQ</Link>
            </li>
            
            <Link href="/quote">
                <button className='button'>Quote</button>
            </Link>
        </nav>
    )
}

export default Navbar