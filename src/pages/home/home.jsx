import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Bear from '../../components/Bear/bearCard'
import Rhino from '../../components/Rinho/rinhoCard'
import Tiger from '../../components/Tiger/tigerCard'

import imgTiger from '../../asets/Image=1.png'
import imgRhino from '../../asets/Image=2.png'
import imgBear from '../../asets/Image=3.png'

import style from './home.module.css'

function Home() {

    // ###Estados y funciones animales### //
    const [hoveredButton, setHoveredButton] = useState(null);
    const [animal, setAnimal] = useState('rhino');
    const [prevAnimal, setPrevAnimal] = useState('rhino');
    const [initialLoad, setInitialLoad] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setInitialLoad(false);
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 649);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = (index) => {
        setHoveredButton(index);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    const handleAnimalShow = (index) => {
        setPrevAnimal(animal);
        setAnimal(index);
    };

    const backgroundImages = {
        rhino: `url(${imgRhino})`,
        tiger: `url(${imgTiger})`,
        bear: `url(${imgBear})`
    };

    return (

        <div className={style.home} style={{ backgroundImage: !isMobile && backgroundImages[animal] }}>

            {!isMobile && (
                <AnimatePresence>
                    {/* ####Button Tiger efect Rhino => Tiger#### */}
                    {animal !== 'tiger' && (
                        <motion.div style={{ display: 'contents' }}>

                            <motion.div className={style.btnCont} style={{ backgroundColor: hoveredButton === 0 ? '#00000045' : '#00000035' }}
                                onClick={() => { handleAnimalShow('tiger') }} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}
                                initial={initialLoad ? false : { opacity: 0 }}
                                animate={initialLoad ? false : { opacity: 1 }}
                                transition={{ duration: 0.7 }}>

                                <button className={`${style.btnAnimals} ${hoveredButton === 0 ? style.hovered : ''}`} >
                                    <div className={style.name}>TIGERS</div>
                                    <div className={style.plus}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 40 40" fill="none">
                                            <path d="M1.25 20H38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                            <path d="M20 1.25V38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                        </svg>
                                    </div>
                                </button>

                            </motion.div>

                            <Tiger animal={animal} prevAnimal={prevAnimal} load={initialLoad} />

                        </motion.div>
                    )}


                    {/* ####Button Rhinocero efect Tiger => Bear#### */}
                    {animal === 'bear' && prevAnimal === 'tiger' && (
                        <motion.div className={style.btnCont} style={{ backgroundColor: hoveredButton === 1 ? '#00000045' : '#00000035' }}
                            initial={initialLoad ? false : { scaleX: 1.01, originX: -142 }}
                            animate={initialLoad ? false : { scaleX: 1, originX: -141 }}
                            transition={{ duration: 0.3 }}>

                            <button className={style.btnAnimals} onClick={() => handleAnimalShow('rhino')} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                                <div className={style.name}>RHINOCEROS</div>
                                <div className={style.plus}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 40 40" fill="none">
                                        <path d="M1.25 20H38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                        <path d="M20 1.25V38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                    </svg>
                                </div>
                            </button>

                        </motion.div>
                    )}
                </AnimatePresence>
            )}


            {/* ####Card Tiger#### */}
            {!isMobile && animal === 'tiger' && (<Tiger animal={animal} prevAnimal={prevAnimal} load={initialLoad} />)}
            {isMobile && (<Tiger animal={'tiger'} load={initialLoad} />)}


            {!isMobile && (
                <AnimatePresence>
                    {/* ####Button Rhinocero efect Rhino => Bear#### */}
                    {animal === 'bear' && prevAnimal === 'rhino' && (
                        <motion.div style={{ display: 'contents' }}>

                            <motion.div className={style.btnCont} style={{ backgroundColor: hoveredButton === 1 ? '#00000045' : '#00000035' }}
                                initial={initialLoad ? false : { opacity: 0 }}
                                animate={initialLoad ? false : { opacity: 1 }}
                                transition={{ duration: 0.7 }}>

                                <button className={style.btnAnimals} onClick={() => handleAnimalShow('rhino')} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                                    <div className={style.name}>RHINOCEROS</div>
                                    <div className={style.plus}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 40 40" fill="none">
                                            <path d="M1.25 20H38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                            <path d="M20 1.25V38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                        </svg>
                                    </div>
                                </button>

                            </motion.div>

                            <Rhino animal={animal} prevAnimal={prevAnimal} load={initialLoad} />

                        </motion.div>
                    )}


                    {/* ####Button Rhinocero efect Rhino => Tiger#### */}
                    {animal === 'tiger' && prevAnimal === 'rhino' && (

                        <motion.div style={{ display: 'contents' }}>

                            <Rhino animal={animal} prevAnimal={prevAnimal} load={initialLoad} />

                            <motion.div className={style.btnCont} style={{ backgroundColor: hoveredButton === 1 ? '#00000045' : '#00000035' }}
                                initial={initialLoad ? false : { opacity: 0 }}
                                animate={initialLoad ? false : { opacity: 1 }}
                                transition={{ duration: 0.7 }}>

                                <button className={style.btnAnimals} onClick={() => handleAnimalShow('rhino')} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                                    <div className={style.name}>RHINOCEROS</div>
                                    <div className={style.plus}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 40 40" fill="none">
                                            <path d="M1.25 20H38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                            <path d="M20 1.25V38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                        </svg>
                                    </div>
                                </button>

                            </motion.div>

                        </motion.div>
                    )}
                </AnimatePresence>
            )}


            {/* ####Card Rhino#### */}
            {!isMobile && animal === 'rhino' && (<Rhino animal={animal} prevAnimal={prevAnimal} load={initialLoad} />)}
            {isMobile && (<Rhino animal={'rhino'} prevAnimal={'rhino'} />)}


            {!isMobile && (
                <AnimatePresence>
                    {/* ####Button Rhinocero efect Bear => Tiger#### */}
                    {animal === 'tiger' && prevAnimal === 'bear' && (
                        <motion.div className={style.btnCont} style={{ backgroundColor: hoveredButton === 1 ? '#00000045' : '#00000035' }}
                            initial={initialLoad ? false : ({ scaleX: 1.01, originX: 142 })}
                            animate={initialLoad ? false : ({ scaleX: 1, originX: 141 })}
                            transition={{ duration: 0.3 }}>

                            <button className={style.btnAnimals} onClick={() => handleAnimalShow('rhino')} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                                <div className={style.name}>RHINOCEROS</div>
                                <div className={style.plus}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 40 40" fill="none">
                                        <path d="M1.25 20H38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                        <path d="M20 1.25V38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                    </svg>
                                </div>
                            </button>

                        </motion.div>
                    )}


                    {/* ####Button Bear efect Bear => Rhino#### */}
                    {animal !== 'bear' && (
                        <motion.div style={{ display: 'contents' }}>

                            <Bear animal={animal} prevAnimal={prevAnimal} load={initialLoad} />

                            <motion.div className={style.btnCont} style={{ backgroundColor: hoveredButton === 2 ? '#00000045' : '#00000035' }}
                                initial={initialLoad ? false : { opacity: 0 }}
                                animate={initialLoad ? false : { opacity: 1 }}
                                transition={{ duration: 0.7 }}>

                                <button className={style.btnAnimals} onClick={() => { handleAnimalShow('bear') }} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                                    <div className={style.name}>BEARS</div>
                                    <div className={style.plus}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 40 40" fill="none">
                                            <path d="M1.25 20H38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                            <path d="M20 1.25V38.75" stroke="#70FFE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                        </svg>
                                    </div>
                                </button>

                            </motion.div>

                        </motion.div>
                    )}
                </AnimatePresence>
            )}


            {/* ####Card Bear#### */}
            {!isMobile && animal === 'bear' && (<Bear animal={animal} prevAnimal={prevAnimal} load={initialLoad} />)}
            {isMobile && (<Bear animal={'bear'} load={initialLoad} />)}


        </div >
    )
};

export default Home;