import Input from '../../../../components/Input/Input'
import Anchor from '../../components/Anchor/Anchor'
import Button from '../../components/Button/Button'
import styles from './existencias.module.css'
import Overlay from '../../../../components/Modal/Modal'
import { useState } from 'react'
import EForm from '../../components/ExistenciasForm/ExistenciasForm'
import { useFetch } from '../../../../useFetch'
import DataTable from 'react-data-table-component'
import 'styled-components'
import { fetchData } from '../../../../fetchData'
import { Suspense } from "react"
import editar from '../../../../assets/editar.png'
const InputSearchProps = {
    type: 'text',
    placeholder: 'busca por codigo',
}
const apiData = fetchData("http://localhost:3000/products")
const ImageEditarProps = {
    width: '10px',
    height: '10px',
    alt: 'editar',
    src: editar
}
function Existencias() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
   // const {data, loading, error, handleCancelRequest} = useFetch("http://localhost:3000/products")
   const data = apiData.read();

    const columns=[ 
    {
        name: 'Nombre',
        selector: row => row.nombre
    },
    {
        name: 'Anaquel',
        selector: row => row.id_inventario
    },
    {
        name: 'Descripción',
        selector: row => row.descripción
    },
    {
        name: 'Cantidad',
        selector: row => row.cantidad
    },
    {
        name: 'Acciones',
        cell: (row, index, column, id) => <button> Acción </button>
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
            <Suspense fallback={<div>Cargando...</div>}>
                
                    <DataTable columns={columns} data={data} pagination paginationComponentOptions={{rowsPerPageText:'Filas por pagina', rangeSeparatorText: 'de'}} />
                
            </Suspense>
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