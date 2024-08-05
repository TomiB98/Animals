import { motion, AnimatePresence } from 'framer-motion';

import style from './bear.module.css'

function Bear() {
    return (
        <AnimatePresence>
            <motion.div className={style.bearCard}
                initial={{ scaleX: 0.23, originX: 1 }}
                animate={{ scaleX: 1, originX: 1 }}
                transition={{ duration: 0.5 }} >

                <div className={style.bearCardCont}>
                    <div className={style.text}>
                        <h1>B E A R S</h1>
                        <h2>Polar Bear: <br /> An impresive size</h2>
                        <p>Is one of the most emblematic victims of global warming. The melting
                            of the Arctic is reducing its hunting ground.</p>
                        <button className={style.btnDonate}>DONATE NOW</button>
                    </div>
                </div>
                
            </motion.div>
        </AnimatePresence>
    )
};

export default Bear;