import { motion, AnimatePresence } from 'framer-motion';

import style from './tiger.module.css'

function Tiger() {
    return (

        <AnimatePresence>
            <motion.div className={style.tigerCard}
                initial={{ scaleX: 0.4, originX: 0 }}
                animate={{ scaleX: 1, originX: 0 }}
                transition={{ duration: 0.8 }}>

                <div className={style.tigerCardCont} >

                    <div className={style.text}>
                        <h1>T I G E R S</h1>
                        <h2>Bengala Tiger: <br /> Living proof that conservation works</h2>
                        <p>Is one of the most emblematic victims of global warming. The melting
                            of the Arctic is reducing its hunting ground.</p>
                        <button className={style.btnDonate}>DONATE NOW</button>
                    </div>
                    
                </div>

            </motion.div>
        </AnimatePresence>

    )
};

export default Tiger;