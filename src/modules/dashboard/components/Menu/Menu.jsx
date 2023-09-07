import Anchor from '../Anchor/Anchor'
import styles from './menu.module.css'


function Menu({ items }) {
    return (
        <div className={styles.menu}>
            {
                items.map((item, idx) => {
                    return (
                        <Anchor key={idx} navigateTo={item.route}>{item.name}</Anchor>
                    )
                })
            }
        </div>
    )
}

export default Menu