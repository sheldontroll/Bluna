import Menu from '../../components/Menu/Menu'
import { inventoryMenuItems } from '../../constants/constants'
import styled from './inventory.module.css'
import Anchor from '../../components/Anchor/Anchor'

function Inventory() {
    return (
        <div>
            <div className={styled.menu_container}>
                <Menu items={inventoryMenuItems} />
            </div>

            <div className={styled.back}>
                <Anchor navigateTo={'/dashboard'}>Volver</Anchor>
            </div>
        </div>
    )
}

export default Inventory