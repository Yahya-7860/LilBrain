import React, { useCallback, useEffect, useState } from 'react';
import { addScaleCorrector, motion } from 'framer-motion';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Score from '../components/Score';
import Endgame from '../components/Endgame';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addStar } from '../features/Score/Scoreslice';


export default function AlphaPage() {
    const [image, setImage] = useState('images2/1.png');
    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const [nextImgIndex, setNextImgIndex] = useState(null);
    const [defaultText, setDefaultText] = useState('green');
    const [defaultText2, setDefaultText2] = useState('green colour');
    const [reminder, setReminder] = useState(false);
    const [message, setMessage] = useState('');
    const [resettingTranscript, setResettingTranscript] = useState(false);
    const [score, setscore] = useState(0)
    const [wave, setwave] = useState(false)



    const Winaudio = new Audio('/Voice/1.mp3')
    const Lossaudio = new Audio('/Voice/2.mp3')



    const dispatch = useDispatch();


    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    let number = 1;
    const nextNumber = () => {
        if (number === 7) {
            number = 1
        }
        return number++;
    }

    const getNext = useCallback(() => {
        const images = ['images2/1.png', 'images2/2.png', 'images2/3.png', 'images2/4.png', 'images2/5.png', 'images2/6.png', 'images2/7.png'];

        const textNam = ['green', 'red', 'purple', 'blue', 'orange', 'white', 'yellow'];
        const textNam2 = ['green colour', 'red colour', 'purple colour', 'blue colour', 'orange colour', 'white colour', 'yellow colour'];


        const index = nextNumber();
        setNextImgIndex(index);
        setImage(images[index]);
        setDefaultText(textNam[index]);
        setDefaultText2(textNam2[index]);
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
                if (text.toLowerCase().trim() === defaultText.toLowerCase() || text.toLowerCase().trim() === defaultText2.toLowerCase()) {
                    dispatch(addStar())
                    Winaudio.play();
                    setscore(score + 1);
                    setMessage('Correct!');
                    toast.success("Yayyyyyy....")
                    setTimeout(() => {
                        setIsExiting(true);
                        resetTranscript();
                    }, 1000); // Character leaves after 1 seconds on success
                } else {
                    Lossaudio.play();
                    setMessage('Try again!');
                    toast.error("Oops! Wrong, Try Again")
                    startListening();
                    setResettingTranscript(true);
                    resetTranscript();
                    setResettingTranscript(false);
                }
            }
            setwave(true)

        }, 2000); // 2s delay for debounce

        return () => clearTimeout(timeoutId);
    }, [text, defaultText, resetTranscript, defaultText2]);

    //! Animation code
    useEffect(() => {
        const handleAnimationFlow = () => {
            if (isVisible) {
                // Start listening when the character is visible
                startListening();     //!listening 

            } else {
                const nextImageTimer = setTimeout(() => {
                    setwave(false)

                    getNext();
                    setIsExiting(false);
                    setIsVisible(true);
                    setText('');
                    setMessage('');
                    setReminder(false);
                }, 1000);

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
        <div className="bg-[url('/images2/bg.jpg')] w-full h-screen bg-cover bg-center bg-no-repeat">
            <div className='flex justify-between items-center p-4 mdsabg-transparent'>
                <Score score={score} />
                <div className='flex justify-between items-center bg-transparent gap-3'>
                    <Endgame />
                </div>
            </div>
            <div className='h-screen flex flex-col justify-center items-center'>
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
                    <img src={image} className='sm:h-[30rem] h-[17rem] mt-[-15rem]' />
                </motion.div>

                <div>
                    {wave && <img className='h-28 mt-[-2.5rem]' src="/images/A.gif" />}
                </div>

                <p className='text-sky-300'>{message}</p>
                <p className='text-sky-200'>{transcript}</p>
                <p className='text-gray-300'>What's the color of object ? Say....</p>
                <ToastContainer position='bottom-center' autoClose={1500} />


            </div>
        </div>





    );
}