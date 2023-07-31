import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className='footer_left'></div>

            <section id='footer'>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d635540.3965482997!2d-0.510463203161823!3d51.52099976314988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1657282542658!5m2!1sen!2suk"
                        width="100%" height="100%" />
                </div>

                <div className="footer_email">
                    <p className='uppercase'>Email</p>
                    <Link href="mailto:contact@bespokeprogramming.net">contact@bespokeprogramming.net</Link>
                </div>

                <div className="footer_telegram">
                    <p className='uppercase'>Telegram</p>
                    <Link href="t.me/bespokeprogramming" target="_blank">
                            t.me/bespokeprogramming
                        </Link>
                </div>

                <div className="location">
                    <h4>Bespoke Programming</h4>
                    <p className='uppercase'>London <br />United Kingdom</p>
                </div>

                <div className="hours">
                    <h4>Office Hours</h4>
                    <p className='uppercase'>Monday - Friday <abbr className='purple'>⇀</abbr> 09.00-17.00 GMT</p>
                    <p className='uppercase'>Saturday - Sunday <abbr className='purple'>⇀</abbr> 09.00-13.00 GMT</p>
                </div>
            </section>

            <div className='footer_right'></div>
        </>
    )
}

export default Footer