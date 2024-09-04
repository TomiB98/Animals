import { motion, AnimatePresence } from 'framer-motion';
import Swal from "sweetalert2";

import style from './rinho.module.css'

function Rhino({ load, animal, prevAnimal }) {

    function handleDonation() {
        Swal.fire({
            title: "Java Rhinoceros",
            text: "¡Are you sure you want to donate to save the Java Rhinoceros!",
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
                    text: "Your support helps protect Java Rhinoceros.",
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

            {(animal === 'rhino' && prevAnimal === 'rhino') &&
                <motion.div className={style.rinhoCard}>

                    <motion.div className={style.rinhoCardCont}>

                        <motion.div className={style.text}>

                            <h1>R H I N O C E R O S</h1>
                            <h2>Java Rhinoceros: <br /> Strong, smart, but vulnerable</h2>
                            <p>It is one of the most endangered animals in the world. And if they used to occupy a vast area of Southeast Asia, they are now concentrated in a single territory, the island of Java. Only 40 to 60 individuals remain.</p>
                            <button className={style.btnDonate} onClick={handleDonation}>DONATE NOW</button>

                        </motion.div>

                    </motion.div>

                </motion.div>
            }


            {/* Transition Tiger => Rhino */}
            {(animal === 'rhino' && prevAnimal === 'tiger') &&
                <motion.div className={style.rinhoCard}
                    initial={load ? false : { scaleX: 0.5, originX: 1 }}
                    animate={load ? false : { scaleX: 1, originX: 1 }}
                    transition={{ duration: 0.3 }}>

                    <motion.div className={style.rinhoCardCont}
                        initial={load ? false : { scaleX: 0.8, scaleY: 0.6, x: 165, y: 45 }}
                        animate={load ? false : { scaleX: 1, scaleY: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.3 }}>

                        <motion.div className={style.text}
                            initial={load ? false : { opacity: 0.2 }}
                            animate={load ? false : { opacity: 1 }}
                            transition={{ duration: 0.3 }}>

                            <h1>R H I N O C E R O S</h1>
                            <h2>Java Rhinoceros: <br /> Strong, smart, but vulnerable</h2>
                            <p>It is one of the most endangered animals in the world. And if they used to occupy a vast area of Southeast Asia, they are now concentrated in a single territory, the island of Java. Only 40 to 60 individuals remain.</p>
                            <button className={style.btnDonate} onClick={handleDonation}>DONATE NOW</button>

                        </motion.div>

                    </motion.div>

                </motion.div>
            }


            {/* Transition Rhino =>  Tiger*/}
            {(animal === 'tiger' && prevAnimal === 'rhino') &&
                <motion.div className={style.rinhoCard} style={animal !== 'rhino' && { position: 'absolute', top: 0, left: 340 }}
                    initial={load ? false : { scaleX: 0.997, originX: 1 }}
                    animate={load ? false : { scaleX: 0.497, originX: 1, opacity: 0, display: 'none' }}
                    transition={{ duration: 0.3 }}>

                    <motion.div className={style.rinhoCardCont}
                        initial={load ? false : { scaleX: 1, scaleY: 1, x: 0, y: 0 }}
                        animate={load ? false : { scaleX: 0.8, scaleY: 0.6, x: 165, y: 45 }}
                        transition={{ duration: 0.3 }}>

                        <motion.div className={style.text}
                            initial={load ? false : { opacity: 0.2 }}
                            animate={load ? false : { opacity: 1 }}
                            transition={{ duration: 0.3 }}>

                            <h1>R H I N O C E R O S</h1>
                            <h2>Java Rhinoceros: <br /> Strong, smart, but vulnerable</h2>
                            <p>It is one of the most endangered animals in the world. And if they used to occupy a vast area of Southeast Asia, they are now concentrated in a single territory, the island of Java. Only 40 to 60 individuals remain.</p>
                            <button className={style.btnDonate} onClick={handleDonation}>DONATE NOW</button>

                        </motion.div>

                    </motion.div>

                </motion.div>
            }


            {/* Transition Bear => Rhino */}
            {(animal === 'rhino' && prevAnimal === 'bear') &&
                <motion.div className={style.rinhoCard}
                    initial={load ? false : { scaleX: 0.5, originX: 0 }}
                    animate={load ? false : { scaleX: 1, originX: 0 }}
                    transition={{ duration: 0.3 }}>

                    <motion.div className={style.rinhoCardCont}
                        initial={load ? false : { scaleX: 0.8, scaleY: 0.6, originX: -0.69, y: 45 }}
                        animate={load ? false : { scaleX: 1, scaleY: 1, originX: 0, y: 0 }}
                        transition={{ duration: 0.3 }}>

                        <motion.div className={style.text}
                            initial={load ? false : { opacity: 0.2 }}
                            animate={load ? false : { opacity: 1 }}
                            transition={{ duration: 0.3 }}>

                            <h1>R H I N O C E R O S</h1>
                            <h2>Java Rhinoceros: <br /> Strong, smart, but vulnerable</h2>
                            <p>It is one of the most endangered animals in the world. And if they used to occupy a vast area of Southeast Asia, they are now concentrated in a single territory, the island of Java. Only 40 to 60 individuals remain.</p>
                            <button className={style.btnDonate} onClick={handleDonation}>DONATE NOW</button>

                        </motion.div>

                    </motion.div>

                </motion.div>
            }


            {/* Transition Rhino => Bear */}
            {(animal === 'bear' && prevAnimal === 'rhino') &&
                <motion.div className={style.rinhoCard} style={animal !== 'rhino' && { position: 'absolute', top: 0, left: 342 }}
                    initial={load ? false : { scaleX: 1, originX: 0 }}
                    animate={load ? false : { scaleX: 0.499, originX: 0, opacity: 0, display: 'none' }}
                    transition={{ duration: 0.3 }}>

                    <motion.div className={style.rinhoCardCont}
                        initial={load ? false : { scaleX: 1, scaleY: 1, originX: 0, y: 0 }}
                        animate={load ? false : { scaleX: 0.8, scaleY: 0.6, originX: -0.69, y: 45 }}
                        transition={{ duration: 0.3 }}>

                        <motion.div className={style.text}
                            initial={load ? false : { opacity: 0.2 }}
                            animate={load ? false : { opacity: 1 }}
                            transition={{ duration: 0.3 }}>

                            <h1>R H I N O C E R O S</h1>
                            <h2>Java Rhinoceros: <br /> Strong, smart, but vulnerable</h2>
                            <p>It is one of the most endangered animals in the world. And if they used to occupy a vast area of Southeast Asia, they are now concentrated in a single territory, the island of Java. Only 40 to 60 individuals remain.</p>
                            <button className={style.btnDonate} onClick={handleDonation}>DONATE NOW</button>

                        </motion.div>

                    </motion.div>

                </motion.div>
            }

        </AnimatePresence>
    )
};

export default Rhino;

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