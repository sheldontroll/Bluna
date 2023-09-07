import Menu from '../../components/Menu/Menu'
import styles from './home.module.css'
import { mainMenuItems } from '../../constants/constants'

function Home() {
    return (
        <div className={styles.menu_container}>
            <Menu items={mainMenuItems} />
        </div>
    )
}

export default Home