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
function Existencias() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [existencia, setExistencia] = useState(null);
    const [existenciaData, setExistenciaData] = useState({})

    //TODO: 
    // 1) Conexion al backend
    // 2) Crear api para existencia
    // 3) Consultar a la api
    // 4) Guardar la data de la existenci en el state de existenciaData
    useEffect(() => {
        //todo: COLOCAR URL DE LA API
        // EXJEMPLO: `http://localhost:8000/api/existencia/${existencia}`
        const response = fetchData();
        const readed = response.read();
        setExistenciaData({ ...readed });
        setIsOverlayOpen(true);
    }, [existencia])



    const apiData = [
        {
            "id_inventario": 1,
            "nombre": "Cartulinas                                        ",
            "id_almacen": 1,
            "descripción": "color rojo                                        ",
            "cantidad": 5
        },
        {
            "id_inventario": 2,
            "nombre": "tinte                                             ",
            "id_almacen": 1,
            "descripción": "negro                                             ",
            "cantidad": 7
        },
        {
            "id_inventario": 7,
            "nombre": "tinte",
            "id_almacen": 1,
            "descripción": "negro                                             ",
            "cantidad": 7
        },
        {
            "id_inventario": 8,
            "nombre": "carton",
            "id_almacen": 6,
            "descripción": "coarrugado                                        ",
            "cantidad": 15
        },
        {
            "id_inventario": 9,
            "nombre": "carton",
            "id_almacen": 6,
            "descripción": "coarrugado                                        ",
            "cantidad": 15
        },
        {
            "id_inventario": 10,
            "nombre": "cajas",
            "id_almacen": 2,
            "descripción": "cajas                                             ",
            "cantidad": 15
        },
        {
            "id_inventario": 11,
            "nombre": "cajas",
            "id_almacen": 2,
            "descripción": "cajas                                             ",
            "cantidad": 15
        },
        {
            "id_inventario": 12,
            "nombre": "cajas",
            "id_almacen": 2,
            "descripción": "cajas                                             ",
            "cantidad": 15
        },
        {
            "id_inventario": 13,
            "nombre": "cajas",
            "id_almacen": 2,
            "descripción": "cajas                                             ",
            "cantidad": 15
        },
        {
            "id_inventario": 14,
            "nombre": "cajas",
            "id_almacen": 2,
            "descripción": "cajas                                             ",
            "cantidad": 15
        },
        {
            "id_inventario": 15,
            "nombre": "cajas",
            "id_almacen": 2,
            "descripción": "cajas                                             ",
            "cantidad": 15
        },
        {
            "id_inventario": 16,
            "nombre": "cajas",
            "id_almacen": 2,
            "descripción": "cajas                                             ",
            "cantidad": 15
        },
        {
            "id_inventario": 17,
            "nombre": "cajas",
            "id_almacen": 2,
            "descripción": "cajas                                             ",
            "cantidad": 15
        },
        {
            "id_inventario": 18,
            "nombre": "cajas",
            "id_almacen": 2,
            "descripción": "cajas                                             ",
            "cantidad": 15
        },
        {
            "id_inventario": 19,
            "nombre": "cajas",
            "id_almacen": 2,
            "descripción": "cajas                                             ",
            "cantidad": 15
        },
        {
            "id_inventario": 20,
            "nombre": "cajas",
            "id_almacen": 2,
            "descripción": "cajas                                             ",
            "cantidad": 15
        }
    ]
    const data = apiData;

    const columns = [
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
            name: 'Actions',
            cell: (row, index, column, id) => {
                return (
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button onClick={_ => setExistencia(row.id_inventario)}>Edit</button>
                        <button onClick={_ => setExistencia(row.id_inventario)}>Delete</button>
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
                    <DataTable columns={columns} data={data} pagination paginationComponentOptions={{ rowsPerPageText: 'Filas por pagina', rangeSeparatorText: 'de' }} />
                </Suspense>
            </div>
            <div>
                <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)} >
                    <EForm></EForm>
                </Overlay>
            </div>


            <div className={styles.actions}>
                <Button text={'Añadir'} onClick={() => setIsOverlayOpen(!isOverlayOpen)} />
                <Anchor navigateTo={'/dashboard/inventory'}>Volver al menú</Anchor>

            </div>
        </div>
    )
}

export default Existencias