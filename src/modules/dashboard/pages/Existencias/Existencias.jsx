import Input from '../../../../components/Input/Input'
import Anchor from '../../components/Anchor/Anchor'
import Button from '../../components/Button/Button'
import styles from './existencias.module.css'
import Overlay from '../../../../components/Modal/Modal'
import { useState } from 'react'
import EForm from '../../components/ExistenciasForm/ExistenciasForm'
import { useFetch } from '../../../../useFetch'


const InputSearchProps = {
    type: 'text',
    placeholder: 'busca por codigo',
}

function Existencias() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const {data, loading} = useFetch("http://localhost:3000/products")
    const columns=[ 
    {
        nombre: 'Nombre',
        selector: row => row.nombre
    },
    {
        nombre: 'Anaquel',
        selector: row => row.id_inventario
    },
    {
        nombre: 'Descripción',
        selector: row => row.descripción
    },
    {
        nombre: 'Cantidad',
        selector: row => row.cantidad
    }
    ]

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
                <ul>
                        
                </ul>
                            {data?.map((inventario) => (
                            <li key={inventario.id_inventario}> {inventario.nombre} </li>
                            
                            )
                            )}         

            </div>
            <div>
                <Overlay isOpen={isOverlayOpen} onClose={()=> setIsOverlayOpen(!isOverlayOpen)} >
                        <EForm></EForm>
                </Overlay>
            </div>
            

            <div className={styles.actions}>
                <Button text={'Añadir'} onClick={()=> setIsOverlayOpen(!isOverlayOpen) } />
                <Anchor navigateTo={'/dashboard/inventory'}>Volver al menú</Anchor>
                
            </div>
        </div>
    )
}

export default Existencias