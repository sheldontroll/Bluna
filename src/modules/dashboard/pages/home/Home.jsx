import Menu from '../../components/Menu/Menu'
import styles from './home.module.css'
import Anchor from '../../components/Anchor/Anchor'
import Button from '../../components/Button/Button'
import { mainMenuItems } from '../../constants/constants'

function Home() {
    return (
            <div>
                <div className={styles.menu_container}>
                    <Menu items={mainMenuItems} />
                </div>
                <div className={styles.actions}>
                    <Anchor navigateTo={'/login'}>Volver</Anchor>
                </div>
            </div>
            
            
    )
}

export default Home