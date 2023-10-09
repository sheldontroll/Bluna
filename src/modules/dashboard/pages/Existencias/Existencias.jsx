import Input from '../../../../components/Input/Input'
import Anchor from '../../components/Anchor/Anchor'
import Button from '../../components/Button/Button'
import styles from './existencias.module.css'
import Overlay from '../../../../components/Modal/Modal'
import { useEffect, useState } from 'react'
import EForm from '../../components/ExistenciasForm/ExistenciasForm'
import DataTable from 'react-data-table-component'
import 'styled-components'
import { fetchData } from '../../../../fetchData'
import { Suspense } from "react"
import editar from '../../../../assets/editar.png'
const InputSearchProps = {
    type: 'text',
    placeholder: 'busca por codigo',
}
const ImageEditarProps = {
    width: '10px',
    height: '10px',
    alt: 'editar',
    src: editar
}
//const response = fetchData("http://localhost:3000/products");
function Existencias() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [existencia, setExistencia] = useState(null);
    const [existenciaData, setExistenciaData] = useState({})
    const [action, setAction] = useState('añadir');
    const readed = response.read();


    const handleEditExistencia = (id) => {
        setIsOverlayOpen(true);
        setAction('editar');
        setExistencia(id);
    }

    const handleModal = () =>{
        setIsOverlayOpen(!isOverlayOpen);
        setAction('añadir');
    }
    //TODO: 
    // 1) Conexion al backend
    // 2) Crear api para existencia
    // 3) Consultar a la api
    // 4) Guardar la data de la existenci en el state de existenciaData
    // useEffect(() => {
    //     //todo: COLOCAR URL DE LA API
    //     // EXJEMPLO: `http://localhost:8000/api/existencia/${existencia}`
    //     const response = fetchData();
    //     const readed = response.read();
    //     setExistenciaData({ ...readed });
    //     setIsOverlayOpen(true);
    // }, [existencia])

    // const {data, loading, error, handleCancelRequest} = useFetch("http://localhost:3000/products"
    

    const columns = [
        {
            name: 'Nombre',
            selector: row => row.nombre
        },
        {
            name: 'Anaquel',
            selector: row => row.id_almacen
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
                    {/* <DataTable columns={columns} data={readed} pagination paginationComponentOptions={{ rowsPerPageText: 'Filas por pagina', rangeSeparatorText: 'de' }} /> */}
                </Suspense>
            </div>
            <div>
                <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)} >
                    <EForm id={existencia} action={action} ></EForm>
                </Overlay>
            </div>


            <div className={styles.actions}>
                <Button text={'Añadir'} onClick={() => handleModal()} />
                <Anchor navigateTo={'/dashboard/inventory'}>Volver al menú</Anchor>

            </div>
        </div>
    )
}

export default Existencias