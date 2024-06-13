import style from './bear.module.css'

function Bear() {
    return (
        <div className={style.bearCard}>
            <div className={style.bearCardCont}>
                <h2>Bears</h2>
                <h1>Polar Bear: An impresive size</h1>
                <p>Is one of the most emblematic victims of global warming. The melting
                    of the Arctic is reducing its hunting ground.</p>
                <button>Donate Now</button>
            </div>
        </div>
    )
};

export default Bear;