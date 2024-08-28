import { motion, AnimatePresence } from 'framer-motion';

import style from './bear.module.css'

function Bear({ load, animal, prevAnimal }) {
    return (
        <AnimatePresence>
            {(animal === 'bear' || prevAnimal === 'bear') &&
                <motion.div className={style.bearCard} style={animal !== 'bear' && { position: 'absolute', top: 0, right: 0 }}
                    initial={load ? false : (animal === 'bear' ? { scaleX: 0.499, originX: 1 } : { scaleX: 0.997, originX: 1 })}
                    animate={load ? false : (animal === 'bear' ? { scaleX: 1, originX: 1 } : { scaleX: 0.499, originX: 1, opacity: 0, display: 'none' })}
                    transition={{ duration: 0.3 }} >

                    <motion.div className={style.bearCardCont}
                        initial={load ? false : (animal === 'bear' ? { scaleX: 0.35, scaleY: 0.5, x: 110, y: 45 } : { scaleX: 1, scaleY: 1, x: 0, y: 0 })}
                        animate={load ? false : (animal === 'bear' ? { scaleX: 1, scaleY: 1, x: 0, y: 0 } : { scaleX: 0.4, scaleY: 0.5, x: 120, y: 45 })}
                        transition={{ duration: 0.3 }}>

                        <motion.div className={style.text}
                            initial={load ? false : { opacity: 0.2 }}
                            animate={load ? false : { opacity: 1 }}
                            transition={{ duration: 0.3 }}>

                            <h1>B E A R S</h1>
                            <h2>Polar Bear: <br /> An impresive size</h2>
                            <p>Is one of the most emblematic victims of global warming. The melting
                                of the Arctic is reducing its hunting ground.</p>
                            <button className={style.btnDonate}>DONATE NOW</button>
                            
                        </motion.div>

                    </motion.div>

                </motion.div>
            }
        </AnimatePresence>
    )
};

export default Bear;