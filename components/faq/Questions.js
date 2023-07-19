import React, { useState } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'

const Questions = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''
        const variants = {
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
    }
        
        return (
            <div key={item.title}>
                <div onClick={() => onTitleClick(index)}>
                    {item.title}
                </div>

                <AnimatePresence initial={false}>
                    {active && 
                        <m.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                        transition={{ duration: 0.75 }}
                            >
                            <p>{item.content}</p>
                        </m.div>
                    }
                </AnimatePresence>
            </div>
        )
    })

    return (
        <div className='questions question_items'>
            {renderedItems}
        </div>
    )
}

export default Questions