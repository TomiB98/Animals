import style from './rinho.module.css'

function Bear() {
    return(
        <div className={style.bearCard}>
            <h2>Rhinoceros</h2>
            <h1>Rhino: Strong, smart, but vulnerable</h1>
            <p>It is one of the most endangered animals in the world. And if they used to occupy a vast area of Southeast Asia, they are now concentrated in a single territory, the island of Java. Only 40 to 60 individuals remain.</p>
            <button>Donate Now</button>
        </div>
    )
};

export default Bear;