import style from './bear.module.css'

function Bear() {
    return (
            <div className={style.bearCardCont}>
                <div className={style.text}>
                    <h1>B E A R S</h1>
                    <h2>Polar Bear: An impresive size</h2>
                    <p>Is one of the most emblematic victims of global warming. The melting
                        of the Arctic is reducing its hunting ground.</p>
                    <button className={style.btnDonate}>DONATE NOW</button>
                </div>
            </div>
    )
};

export default Bear;