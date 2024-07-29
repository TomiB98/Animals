import style from './home.module.css'
//import Bear from '../../components/Bear/bearCard'
import Rinho from '../../components/Rinho/rinhoCard'
//import Tiger from '../../components/Tiger/tigerCard'

function Home() {
    return (
        <div className={style.home}>

            <div className={style.second}>
                <button className={style.btnChange}>TIGERS</button>
            </div>

            {/* <div className={style.first}><Tiger /></div> */}

            {/* <div className={style.second}>
                <button className={style.btnChange}>RHINOCEROS</button>
            </div> */}

            <div className={style.first}><Rinho /></div>

            <div className={style.second}>
                <button className={style.btnChange}>BEARS</button>
            </div>

            {/* <div className={style.first}><Bear /></div> */}
        </div>

    )
};

export default Home;