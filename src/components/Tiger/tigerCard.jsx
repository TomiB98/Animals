import { motion, AnimatePresence } from 'framer-motion';
import Swal from "sweetalert2";

import style from './tiger.module.css'

function Tiger({ load, animal, prevAnimal }) {

    function handleDonation() {
        Swal.fire({
            title: "Bengala Tiger",
            text: "¡Are you sure you want to donate to save the Bengala Tigers!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Donate",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#28a745",
            cancelButtonColor: "#ff0000",
            background: "rgba(0, 0, 0, 0.818)",  // Color de fondo personalizado
            color: "#ffffff",
        }).then((result) => {
            // Verifica si el usuario hizo clic en "Ok"
            if (result.isConfirmed) {
                Swal.fire({
                    title: "¡Thank you for your donation!",
                    text: "Your support helps protect Bengala Tigers.",
                    icon: "success",
                    confirmButtonText: "Close",
                    background: "rgba(0, 0, 0, 0.818)",  // Color de fondo personalizado
                    color: "#ffffff",
                });
            }
        });
    };

    return (
        <AnimatePresence>
            {(animal === 'tiger' || prevAnimal === 'tiger') &&
                <motion.div className={style.tigerCard} style={animal !== 'tiger' && { position: 'absolute', top: 0, left: 0, right: 0 }}
                    initial={load ? false : (animal === 'tiger' ? { scaleX: 0.5, originX: 0 } : { scaleX: 0.997, originX: 0 })}
                    animate={load ? false : (animal === 'tiger' ? { scaleX: 1, originX: 0 } : { scaleX: 0.5, originX: 0, opacity: 0, display: 'none' })} //  
                    transition={{ duration: 0.3 }}>

                    <motion.div className={style.tigerCardCont}
                        initial={load ? false : (animal === 'tiger' ? { scaleX: 0.8, scaleY: 0.6, originX: -0.8, y: 45 } : { scaleX: 1, scaleY: 1, originX: 0, y: 0 })}
                        animate={load ? false : (animal === 'tiger' ? { scaleX: 1, scaleY: 1, originX: 0, y: 0 } : { scaleX: 0.8, scaleY: 0.6, originX: -0.8, y: 45 })}
                        transition={{ duration: 0.3 }}>

                        <motion.div className={style.text}
                            initial={load ? false : { opacity: 0.2 }}
                            animate={load ? false : { opacity: 1 }}
                            transition={{ duration: 0.3 }}>

                            <h1>T I G E R S</h1>
                            <h2>Bengala Tiger: <br /> Living proof that conservation works</h2>
                            <p>The charismatic giant panda – WWF’s famous symbol – is a conservation icon turned conservation success.</p>
                            <button className={style.btnDonate} onClick={handleDonation}>DONATE NOW</button>

                        </motion.div>

                    </motion.div>

                </motion.div>
            }
        </AnimatePresence>
    )
};

export default Tiger;