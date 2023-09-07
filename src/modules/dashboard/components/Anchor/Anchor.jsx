import { Link } from 'react-router-dom'
import styles from './anchor.module.css'


function Anchor({ children, navigateTo }) {
    return (
        <Link to={navigateTo} className={styles.btn}> {children} </Link>
    )
}

export default Anchor