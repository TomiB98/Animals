import { motion, AnimatePresence } from 'framer-motion';

import style from './tiger.module.css'

function Tiger({ load, animal, prevAnimal }) {
    return (
        <AnimatePresence>
            {(animal === 'tiger' || prevAnimal === 'tiger') &&
                <motion.div className={style.tigerCard} style={animal !== 'tiger' && { position: 'absolute', top: 0, left: 0, right: 0 }}
                    initial={load ? false : (animal === 'tiger' ? { scaleX: 0.4, originX: 0 } : { scaleX: 1.02, originX: 0 })}
                    animate={load ? false : (animal === 'tiger' ? { scaleX: 1, originX: 0 } : { scaleX: 0.423, originX: 0, opacity: 0 })}
                    transition={{ duration: 0.4 }}>

                    <motion.div className={style.tigerCardCont}
                        initial={load ? false : (animal === 'tiger' ? { scaleX: 0.8, scaleY: 0.6, originX: -0.8, y: 45 } : { scaleX: 1, scaleY: 1, originX: 0, y: 0 })}
                        animate={load ? false : (animal === 'tiger' ? { scaleX: 1, scaleY: 1, originX: 0, y: 0 } : { scaleX: 0.8, scaleY: 0.6, originX: -0.8, y: 45 })}
                        transition={{ duration: 0.4 }}>

                        <motion.div className={style.text}
                            initial={load ? false : { opacity: 0.2 }}
                            animate={load ? false : { opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0 }}>

                            <h1>T I G E R S</h1>
                            <h2>Bengala Tiger: <br /> Living proof that conservation works</h2>
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

export default Tiger;