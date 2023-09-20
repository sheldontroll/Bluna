import Form from "../../../auth/components/Form/Form"
import InputF from "../../../../components/Input/Input"
import ButtonF from "../Button/Button"
import Styles from "./RolesForm.module.css"
import { useEffect, useState } from "react"
import { fetchData } from "../../../../fetchData"
import { Suspense } from "react"
import { useFetch } from "../../../../useFetch"
const InputCodigoProps = {
    id: 'codigo',
    name: 'codigo',
    placeholder: 'ingresa el codigo',
    type: 'number',
    label: 'Codigo'
}
const InputNombreProps = {
    id: 'nombre',
    name: 'nombre',
    placeholder: 'ingresa el nombre',
    type: 'text',
    label: 'Nombre'
}
const InputRolProps = {
    id: 'rol',
    name: 'rol',
    placeholder: 'Rol',
    type: 'text',
    label: 'rol'
}

export default function RolesForm( {ruc, action} ) {
    const [usuario, setUsuario] = useState( {ruc:null,nombre:null,rol:null} )
    const fetchUser = async () => { 
        const url = `http://localhost:3000/auth/usuarios/${ruc}`
        const recibir = await fetch(url)
        const response = await recibir.json()
        setUsuario({ruc:response.ruc.trim(),nombre:response.nombre,rol:response.rol});
    }
    useEffect(() => {
        
         if(ruc && action==='editar'){
            console.log(ruc)
           fetchUser()
         }else{
            setUsuario({ruc:null,nombre:null,rol:null});
         }
    },[ruc])

   //tener un handler, tener un if, si action es editar usar las cosas para editar, si action es añadir usar la api añadir
    return (
           <Form styling={{ width: '100%' }}>
            <div>
                <div>
                    <InputF value={usuario.ruc} {...InputCodigoProps} />
                </div>

                <div>
                    <InputF value={usuario.nombre } {...InputNombreProps} />
                </div>

                <div>
                    <InputF value={usuario.rol} {...InputRolProps} />
                </div>
                <div className={Styles.FormFooter}>
                    <ButtonF text='Añadir' />
                    <ButtonF text='Cancelar' />

                </div>
            </div>
        </Form> 
    )
}