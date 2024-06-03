import style from './home.module.css'
import Bear from '../../components/Bear/bearCard'
import Rinho from '../../components/Rinho/rinhoCard'
import Tiger from '../../components/Tiger/tigerCard'

function Home() {
    return (
        <div className={style.Bear}>
            <div><Bear /></div>
            <div><Rinho /></div>
            <div><Tiger /></div>
        </div>

    )
};

export default Home;