import '../styles/globals.scss'
import '../styles/layout/navbar.scss'
import '../styles/layout/footer.scss'
import '../styles/layout/strips.scss'
import '../styles/pages/home.scss'

import { motion as m, AnimatePresence } from 'framer-motion'
import Layout from '../components/layout/Layout.js'

export default function App({ Component, pageProps, router }) {

    const first_variant = {
        initial: {width: "0%", x: "0%", transition: {duration: 0.75, ease: "easeInOut"}},
        animate: {width: "100%", x: "100%", transition: {duration: 0.75, ease: "easeInOut"}},
        exit: {width: "100%", x: "0%", transition: {duration: 0.75, ease: "easeInOut"}}
    }

    const second_variant = {
        initial: {width: "0%", x: "0%", transition: {duration: 1, ease: "easeInOut"}},
        animate: {width: "100%", x: "100%", transition: {duration: 1, ease: "easeInOut"}},
        exit: {width: "100%", x: "0%", transition: {duration: 1, ease: "easeInOut"}}
    }
    const third_variant = {
        initial: {width: "0%", x: "0%", transition: {duration: 1.25, ease: "easeInOut"}},
        animate: {width: "100%", x: "100%", transition: {duration: 1.25, ease: "easeInOut"}},
        exit: {width: "100%", x: "0%", transition: {duration: 1.25, ease: "easeInOut"}}
    }

    const fourth_variant = {
        initial: {width: "0%", x: "0%", transition: {duration: 1.5, ease: "easeInOut"}},
        animate: {width: "100%", x: "100%", transition: {duration: 1.5, ease: "easeInOut"}},
        exit: {width: "0%", x: "100%", transition: {duration: 1.5, ease: "easeInOut"}}
    }

    return (
        <Layout>
            <AnimatePresence
                initial={true}
                mode={'wait'}
                layout
                >
                    <m.div
                        className="block_magenta"
                        variants={first_variant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        />
                    <m.div
                        className="block_blend"
                        variants={second_variant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        />
                    <m.div
                        className="block_blend"
                        variants={third_variant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        />
                    <m.div
                        className="block_indigo"
                        variants={fourth_variant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        />
                        <Component
                            {...pageProps}
                            key={router.pathname}
                        />
            </AnimatePresence>
        </Layout>
    )
}