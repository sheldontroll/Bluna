import Form from "../../../auth/components/Form/Form"
import InputF from "../../../../components/Input/Input"
import ButtonF from "../Button/Button"
import Styles from "./SolicitudesForm.module.css"
import { useEffect, useState } from "react"

const InputCodigoProps = {
    id: 'codigo',
    name: 'codigo',
    placeholder: 'ingresa el codigo',
    type: 'number',
    label: 'Codigo'
}
const InputUsuarioProps = {
    id: 'usuario',
    name: 'usuario',
    placeholder: 'Aqui va el nombre del usuario',
    type: 'text',
    label: 'Usuario'
}
const InputCantidadProps = {
    id: 'cantidad',
    name: 'cantidad',
    placeholder: 'cantidad',
    type: 'number',
    label: 'cantidad'
}
const InputProductoIdProps = {
    id: 'IdProducto',
    name: 'IdProducto',
    placeholder: 'IdProducto',
    type: 'number',
    label: 'IdProducto'
}
const InputNombreProductoProps = {
    id: 'producto',
    name: 'producto',
    placeholder: 'producto',
    type: 'text',
    label: 'producto'
}

export default function SolicitudesForm( {id, action} ) {
    const [usuario, setUsuario] = useState( {id:null,nombre:null} )
    // const fetchUser = async () => { 
    //     const url = `http://localhost:3000/auth/usuarios/${ruc}`
    //     const recibir = await fetch(url)
    //     const response = await recibir.json()
    //     setUsuario({id:response.id.trim(),nombre:response.nombre});
    // }
    useEffect(() => {
        
         if(ruc && action==='editar'){
            console.log(id)
           fetchUser()
         }else{
            setUsuario({id:null,nombre:null});
         }
    },[ruc])

   //tener un handler, tener un if, si action es editar usar las cosas para editar, si action es añadir usar la api añadir
    return (
           <Form styling={{ width: '100%' }}>
            <div>
                <div>
                    <InputF value={usuario.id} {...InputCodigoProps} />
                </div>

                <div>
                    <InputF value={usuario.nombre } {...InputUsuarioProps} />
                </div>

                <div>
                    <InputF  {...InputProductoIdProps} />
                </div>

                <div>
                    <InputF  {...InputNombreProductoProps} />
                </div>

                <div>
                    <InputF  {...InputCantidadProps} />
                </div>
                <div className={Styles.FormFooter}>
                    <ButtonF text='Aceptar' />
                    <ButtonF text='Rechazar' />
                </div>
            </div>
        </Form> 
    )
}