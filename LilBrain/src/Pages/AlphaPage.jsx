import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import { motion } from "framer-motion"


function AlphaPage() {
    const [Image, setImage] = useState('')
    const [NextImgIndex, setNextImgIndex] = useState(null)
    const [DefaultText, setDefaultText] = useState('')
    const [DefaultText2, setDefaultText2] = useState('')
    const [DefaultText3, setDefaultText3] = useState('')



    const getNext = useCallback(() => {
        const images = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png', 'images/21.png', 'images/22.png', 'images/23.png', 'images/24.png', 'images/25.png', 'images/26.png'];
        const textNam = ['a for apple', 'm for monkey', 'h for horse', 'b for ball', 'l for lion', 'c for cat', 'd for dog', 'k for kite', 'r for rat', 'j for joker', 's for son', 'g for grapes', 'q for queen', 'i for ice cream', 't for tiger', 'u for umbrella', 'v for van', 'e for elephant', 'w for watermelon', 'x for xmas', 'p for peacock', 'f for fish', 'o for orange', 'y for yoga', 'n for nest', 'z for zebra'];

        const textNam2 = ['a for apple', 'm for monkey', 'h4 horse', 'b for ball', 'l for lion', 'c for cat', 'd for dog', 'k4 kite', 'r4 rate', 'j4', 's4 son', 'g4 grapes', 'q4 queen', 'i for icecream', 't4 tiger', 'you for umbrella', 'v for when', 'e for elephant', 'w for watermelon', 'x4', 'p4 peacock', 'f for fish', 'o4 orange', 'why for yoga', 'n for nest', 'z4 zebra'];

        const textNam3 = ['a for apple', 'm for monkey', 'h for', 'b for ball', 'l for lion', 'c for cat', 'd for dog', 'k for kite', 'r for rate', 'j4 joker', 's4 son', 'g for grapes', 'q for queen', 'i for icecream', 'tea for tiger', 'u for umbrella', 'v4 when', 'e for elephant', 'w for watermelon', 'x4 xmas', 'p for peacock', 'f for fish', 'o4 orange', 'you for yoga', 'n for nest', 'z4 zebra'];

        const index = Math.floor(Math.random() * images.length);
        setImage(images[index]);
        setNextImgIndex(index);
        setDefaultText(textNam[index]);
        setDefaultText2(textNam2[index]);
        setDefaultText3(textNam3[index]);
    }, []);

    const characterVariants = {
        hidden: {
            x: '-100vw',
            opacity: 0
        },
        visible: {
            x: '0vw',
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 50
            }
        },
        exit: {
            x: '100vw',
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness: 50
            }
        }
    };


    return (
        <div>
            <motion.div
                className='flex justify-center items-center'
                key={image}
                variants={characterVariants}
                initial="hidden"
                animate={isExiting ? 'exit' : 'visible'}
                onAnimationComplete={() => {
                    if (isExiting) setIsVisible(false);
                }}
            >
                <img src={image} className='h-52' />
            </motion.div>
        </div>
    )
}

export default AlphaPage