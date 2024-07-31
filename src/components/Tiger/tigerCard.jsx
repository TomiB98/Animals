import style from './tiger.module.css'

function Tiger() {
    return (
            <div className={style.tigerCardCont}>
                <div className={style.text}>
                    <h1>T I G E R S</h1>
                    <h2>Bengala Tiger: <br/> Living proof that conservation works</h2>
                    <p>Is one of the most emblematic victims of global warming. The melting
                        of the Arctic is reducing its hunting ground.</p>
                    <button className={style.btnDonate}>DONATE NOW</button>
                </div>
            </div>
    )
};

export default Tiger;