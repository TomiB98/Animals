import style from './home.module.css'
import Bear from '../../components/Bear/bearCard'
//import Rinho from '../../components/Rinho/rinhoCard'
//import Tiger from '../../components/Tiger/tigerCard'
import React, { useState } from 'react';

function Home() {

    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredButton(index);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    return (
        <div className={style.home}>

            {/* ####Card and button Tiger#### */}

            <div className={style.second} style={{ backgroundColor: hoveredButton === 0 ? 'rgba(0, 0, 0, 0.350)' : 'rgba(0, 0, 0, 0.171)' }}>

                <button className={style.btnAnimals} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                    <div className={style.name}>TIGERS</div>
                    <div className={style.plus}>
                        <svg width="50" height="50" viewBox="0 0 50 50">
                            <line x1="20" y1="10" x2="20" y2="40" stroke="rgb(112, 237, 253)" stroke-width="1" stroke-dasharray="2 1" />
                            <line x1="4" y1="25" x2="40" y2="25" stroke="rgb(112, 237, 253)" stroke-width="1" stroke-dasharray="2 1" />
                        </svg>
                    </div>
                </button>

            </div>

            {/* <div className={style.first}><Tiger /></div> */}

            {/* ####Card and button Rhino#### */}

            <div className={style.second} style={{ backgroundColor: hoveredButton === 1 ? 'rgba(0, 0, 0, 0.350)' : 'rgba(0, 0, 0, 0.171)' }}>

                <button className={style.btnAnimals} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                    <div className={style.name}>RHINOCEROS</div>
                    <div className={style.plus}>
                        <svg width="50" height="50" viewBox="0 0 50 50">
                            <line x1="20" y1="10" x2="20" y2="40" stroke="rgb(112, 237, 253)" stroke-width="1" stroke-dasharray="2 1" />
                            <line x1="4" y1="25" x2="40" y2="25" stroke="rgb(112, 237, 253)" stroke-width="1" stroke-dasharray="2 1" />
                        </svg>
                    </div>
                </button>

            </div>

            {/* <div className={style.first}><Rinho /></div> */}

            {/* ####Card and button Bear#### */}

            {/* <div className={style.second} style={{ backgroundColor: hoveredButton === 2 ? 'rgba(0, 0, 0, 0.350)' : 'rgba(0, 0, 0, 0.171)' }}>

                <button className={style.btnAnimals} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                    <div className={style.name}>BEARS</div>
                    <div className={style.plus}>
                        <svg width="50" height="50" viewBox="0 0 50 50">
                            <line x1="20" y1="10" x2="20" y2="40" stroke="rgb(112, 237, 253)" stroke-width="1" stroke-dasharray="2 1" />
                            <line x1="4" y1="25" x2="40" y2="25" stroke="rgb(112, 237, 253)" stroke-width="1" stroke-dasharray="2 1" />
                        </svg>
                    </div>
                </button>

            </div> */}

            <div className={style.first}><Bear /></div>
        </div>

    )
};

export default Home;