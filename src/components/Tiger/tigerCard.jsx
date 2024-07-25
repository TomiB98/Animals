import style from './tiger.module.css'

function Tiger() {
    return (
        <div className={style.tigerCard}>
            <div className={style.tigerCardCont}>
                <h2>T I G E R S</h2>
                <h1>Bengala tiger: Living proof that conservation works</h1>
                <p>Is one of the most emblematic victims of global warming. The melting
                    of the Arctic is reducing its hunting ground.</p>
                <button>Donate Now</button>
            </div>
        </div>
    )
};

export default Tiger;