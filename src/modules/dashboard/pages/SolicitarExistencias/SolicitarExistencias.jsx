import { Suspense } from "react";
import styles from './SolicitarExistencias.module.css'
import Button from "../../components/Button/Button";
import Overlay from '../../../../components/Modal/Modal'
import Anchor from "../../components/Anchor/Anchor";
import { fetchData } from "../../../../fetchData";
import { useState, useEffect } from "react";
import Input from "../../../../components/Input/Input";
import DataTable from "react-data-table-component";
import 'styled-components'
import SolicitudesForm from "../../components/SolicitudesForm/SolicitudesForm";


const InputSearchProps = {
    type: 'text',
    placeholder: 'busca por codigo',
}


function Solicitar(){
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
const [action, setAction] = useState('añadir');
const columns = [
    {
        name: 'Id',
        selector: row => row.id
    },
    {
        name: 'Usuario',
        selector: row => row.nombre
    },
    {
        name: 'Codigo',
        selector: row => row.codigo
    },
    {
        name: 'Producto',
        selector: row => row.producto
    },
    {
        name: 'Cantidad',
        selector: row => row.cantidad
    },
    {
        name: 'Estado',
        selector: row => row.status
    },
    {
        name: 'Acciones',
        cell: (row, index, column, id) => {
            return (
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={_ => handleEditExistencia(row.id_inventario)}>Editar</button>
                    {/* <button onClick={_ => setExistencia(row.id_inventario)}>Delete</button> */}
                </div>
            )
        }
    }

]
    return(
        <div className={styles.existencias}>
            <div className={styles.search}>
                <div className={styles.field_search}>
                    <Button text={'buscar'} />
                    <Input {...InputSearchProps} />
                </div>
            </div>

            <div className={`${styles.area}`}>
                <Suspense fallback={<div>Cargando...</div>}>
                    {/* <DataTable columns={columns} data={readed} pagination paginationComponentOptions={{ rowsPerPageText: 'Filas por pagina', rangeSeparatorText: 'de' }} /> */}
                </Suspense>
            </div>
            <div>
                <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)} >
                    <SolicitudesForm id={existencia} action={action} ></SolicitudesForm>
                </Overlay>
            </div>


            <div className={styles.actions}>
                <Button text={'Añadir'} onClick={() => handleModal()} />
                <Anchor navigateTo={'/dashboard/inventory'}>Volver al menú</Anchor>

            </div>
        </div>
    )
}

export default Solicitar