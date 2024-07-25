import style from './home.module.css'
//import Bear from '../../components/Bear/bearCard'
import Rinho from '../../components/Rinho/rinhoCard'
//import Tiger from '../../components/Tiger/tigerCard'

function Home() {
    return (
        <div className={style.home}>
            {/* <div><Tiger /></div> */}
            <div><Rinho /></div>
            {/* <div><Bear /></div> */}
        </div>

    )
};

export default Home;