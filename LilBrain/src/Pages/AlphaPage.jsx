import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Score from '../components/Score';

export default function AlphaPage() {
    const [image, setImage] = useState('images/1.png');
    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const [nextImgIndex, setNextImgIndex] = useState(null);
    const [defaultText, setDefaultText] = useState('a for apple');
    const [defaultText2, setDefaultText2] = useState('a for apple');
    const [defaultText3, setDefaultText3] = useState('a for apple');
    const [reminder, setReminder] = useState(false);
    const [message, setMessage] = useState('');
    const [resettingTranscript, setResettingTranscript] = useState(false);

    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const getNext = useCallback(() => {
        const images = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png', 'images/21.png', 'images/22.png', 'images/23.png', 'images/24.png', 'images/25.png', 'images/26.png'];
        const textNam = ['a for apple', 'm for monkey', 'h for horse', 'b for ball', 'l for lion', 'c for cat', 'd for dog', 'k for kite', 'r for rat', 'j for joker', 's for son', 'g for grapes', 'q for queen', 'i for ice cream', 't for tiger', 'u for umbrella', 'v for van', 'e for elephant', 'w for watermelon', 'x for xmas', 'p for peacock', 'f for fish', 'o for orange', 'y for yoga', 'n for nest', 'z for zebra'];

        const textNam2 = ['a for apple', 'm for monkey', 'h4 horse', 'b for ball', 'l for lion', 'c for cat', 'd for dog', 'k4 kite', 'r4 rate', 'j4', 's4 son', 'g4 grapes', 'q4 queen', 'i for icecream', 't4 tiger', 'you for umbrella', 'v for when', 'e for elephant', 'w for watermelon', 'x4', 'p4 peacock', 'f for fish', 'o4 orange', 'why for yoga', 'n for nest', 'z4 zebra'];

        const textNam3 = ['a for apple', 'm for monkey', 'h for', 'b for ball', 'l for lion', 'c for cat', 'd for dog', 'k for kite', 'r for rate', 'j4 joker', 's4 son', 'g for grapes', 'q for queen', 'i for icecream', 'tea for tiger', 'u for umbrella', 'v4 when', 'e for elephant', 'w for watermelon', 'x4 xmas', 'p for peacock', 'f for fish', 'o4 orange', 'you for yoga', 'n for nest', 'z4 zebra'];

        const index = Math.floor(Math.random() * images.length);
        setNextImgIndex(index);
        setImage(images[index]);
        setDefaultText(textNam[index]);
        setDefaultText2(textNam2[index]);
        setDefaultText3(textNam3[index]);
    }, []);

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: 'en-UK' });
    };

    const stopListening = () => {
        SpeechRecognition.stopListening(); // filhal isko band kiya h.. pura speech lene me problem kar rha tha
    };

    useEffect(() => {
        if (!resettingTranscript && transcript.trim() !== '') {
            setText(transcript);
            // stopListening();    
        }
    }, [transcript, resettingTranscript]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (text.trim() !== '') {
                if (text.toLowerCase().trim() === defaultText.toLowerCase() || text.toLowerCase().trim() === defaultText2.toLowerCase() || text.toLowerCase().trim() === defaultText3.toLowerCase()) {
                    setMessage('Correct!');
                    setTimeout(() => {
                        setIsExiting(true);
                        resetTranscript();
                    }, 1000); // Character leaves after 2 seconds on success
                } else {
                    setMessage('Try again!');
                    startListening();
                    setResettingTranscript(true);
                    resetTranscript();
                    setResettingTranscript(false);
                }
            }
        }, 2000); // 2000ms delay for debounce

        return () => clearTimeout(timeoutId); // Clear timeout if `text` changes before timeout completes
    }, [text, defaultText, resetTranscript, defaultText2, defaultText3]);

    //! Animation code
    useEffect(() => {
        const handleAnimationFlow = () => {
            if (isVisible) {
                // Start listening when the character is visible
                // startListening();
                // Set a timer to show the reminder message if no speech input is detected
                const reminderTimer = setTimeout(() => {
                    setReminder(true);
                }, 5000);

                return () => clearTimeout(reminderTimer);
            } else {
                // Set a timer to get the next image and show it after the exit animation
                const nextImageTimer = setTimeout(() => {
                    getNext();
                    setIsExiting(false);
                    setIsVisible(true);
                    setText('');
                    setMessage('');
                    setReminder(false);
                }, 500); // Adjust duration to match exit animation duration

                return () => clearTimeout(nextImageTimer);
            }
        };

        handleAnimationFlow();
    }, [isVisible, getNext]);

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

    if (!browserSupportsSpeechRecognition) {
        return <div>Your browser does not support speech recognition.</div>;
    }

    return (
        <>
            <Score />
            <div className='bg-gray-400 h-screen flex flex-col justify-center items-center'>
                <motion.div
                    className='flex justify-center items-center'
                    key={image} // Add a key to force re-render on image change
                    variants={characterVariants}
                    initial="hidden"
                    animate={isExiting ? 'exit' : 'visible'}
                    onAnimationComplete={() => {
                        if (isExiting) setIsVisible(false);
                    }}
                >
                    <img src={image} className='h-96 mt-[-15rem]' />
                </motion.div>


                <p>{message}</p>
                {reminder && !transcript && <p>Reminder: Please say the word!</p>}
                <p className='text-gray-500'>{transcript}</p>

            </div>
        </>





    );
}
