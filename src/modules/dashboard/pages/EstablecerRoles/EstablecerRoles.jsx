import { Suspense } from "react";
import styles from './establecerroles.module.css'
import Button from "../../components/Button/Button";
import Overlay from '../../../../components/Modal/Modal'
import Anchor from "../../components/Anchor/Anchor";
import { fetchData } from "../../../../fetchData";
import { useState, useEffect } from "react";
import Input from "../../../../components/Input/Input";
import DataTable from "react-data-table-component";
import 'styled-components'



const InputSearchProps = {
    type: 'text',
    placeholder: 'busca por codigo',
}



const response = fetchData("http://localhost:3000/auth/usuarios");

function EstablecerRoles() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [existencia, setExistencia] = useState(null);
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
    const columns = [
        {
            name: 'Código',
            selector: row => row.ruc
        },
        {
            name: 'Nombre',
            selector: row => row.nombre
        },
        {
            name: 'Rol',
            selector: row => row.rol
        },
        {
            name: 'Actions',
            cell: (row, index, column, id) => {
                return (
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button  onClick={_ => handleEditExistencia(row.ruc)}>Editar</button>
                        <button onClick={_ => setExistencia(row.ruc)}>Borrar</button>
                    </div>
                )
            }
        }

    ]

return (

    <div className={styles.roles}>
        <div className={styles.search}>
            <div className={styles.field_search}>
                <Button text={'buscar'} />
                <Input {...InputSearchProps} />
            </div>
        </div>

        <div className={`${styles.area}`}>
            <Suspense fallback={<div>Cargando...</div>}>
                <DataTable columns={columns} data={ readed.users } pagination paginationComponentOptions={{ rowsPerPageText: 'Filas por pagina', rangeSeparatorText: 'de' }} />
            </Suspense>
        </div>


        <div className={styles.actions}>
            <Anchor navigateTo={'/dashboard'}>Volver al menú</Anchor>

        </div>
    </div>
    )
}

export default EstablecerRoles