import Input from '../../../../components/Input/Input'
import Anchor from '../../components/Anchor/Anchor'
import Button from '../../components/Button/Button'
import styles from './existencias.module.css'


const InputSearchProps = {
    type: 'text',
    placeholder: 'busca por codigo',
}

function Existencias() {
    return (
        <div className={styles.existencias}>
            <div className={styles.search}>
                <div className={styles.field_search}>
                    <Button text={'buscar'} />
                    <Input {...InputSearchProps} />
                </div>
            </div>

            <div className={`${styles.area}`}>
                <span>de momento no hay existencias...</span>
            </div>

            <div className={styles.actions}>
                <Button text={'Añadir'} />
                <Anchor navigateTo={'/dashboard/inventory'}>Volver al menú</Anchor>
            </div>
        </div>
    )
}

export default Existencias