import { motion, AnimatePresence } from 'framer-motion';

import style from './rinho.module.css'

function Rhino({ prevAnimal, load }) {
    return (
        // <div className={style.rinhoCard}>

        //     {/* <div className={style.btnChange}>
        //         <button className={style.btnChange}>TIGERS</button>
        //     </div> */}

        //     <div className={style.rinhoCardCont}>
        //         <div className={style.text}>
        //             <h2>R H I N O C E R O S</h2>
        //             <h1>Strong, smart, but vulnerable</h1>
        //             <p>It is one of the most endangered animals in the world. And if they used to occupy a vast area of Southeast Asia, they are now concentrated in a single territory, the island of Java. Only 40 to 60 individuals remain.</p>
        //             <button className={style.btnDonate}>DONATE NOW</button>
        //         </div>
        //     </div>

        //     {/* <div>
        //         <button className={style.btnChange}>BEARS</button>
        //     </div> */}

        // </div>

        <AnimatePresence>
            <motion.div className={style.rinhoCard}
                initial={load ? false : (prevAnimal === 'bear' ? { scaleX: 0.4, originX: 0 } : {scaleX: 0.4, originX: 1})} // 1 para tigre, 0 para oso
                animate={load ? false : (prevAnimal === 'bear' ? { scaleX: 1, originX: 0 } : {scaleX: 1, originX: 1})} // 1 para tigre, 0 para oso
                transition={{ duration: 0.8 }}>

                <div className={style.rinhoCardCont}>

                    <div className={style.text}>
                        <h1>R H I N O C E R O S</h1>
                        <h2>Java Rhinoceros: <br /> Strong, smart, but vulnerable</h2>
                        <p>It is one of the most endangered animals in the world. And if they used to occupy a vast area of Southeast Asia, they are now concentrated in a single territory, the island of Java. Only 40 to 60 individuals remain.</p>
                        <button className={style.btnDonate}>DONATE NOW</button>
                    </div>
                    
                </div>

            </motion.div>
        </AnimatePresence>
    )
};

export default Rhino;