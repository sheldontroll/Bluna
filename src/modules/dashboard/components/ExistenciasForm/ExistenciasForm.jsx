import Form from "../../../auth/components/Form/Form"
import InputF from "../../../../components/Input/Input"
import ButtonF from "../Button/Button"
import Styles from "./ExistenciasForm.module.css"
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
const InputDescripcionProps = {
    id: 'descripcion',
    name: 'descripcion',
    placeholder: 'ingresa la descripcion',
    type: 'text',
    label: 'Descripción'
}
const InputIngresoProps = {
    id: 'ingresos',
    name: 'ingresos',
    placeholder: 'Cantidad',
    type: 'number',
    label: 'Ingresos'
}
const InputSalidaProps = {
    id: 'salidas',
    name: 'salidas',
    placeholder: 'Cantidad',
    type: 'number',
    label: 'Salidas'
}

export default function ExistenciasForm( {id, action} ) {
    const [producto, setProducto] = useState( {id_inventario:null,id_almacen:null,descripcion:null,cantidad:null} )
    
    useEffect(() => {
        const fetchProduct = async () => { 
            const url = `http://localhost:3000/products/${id}`
            const recibir = await fetch(url)
            const response = await recibir.json()
            setProducto(response);
        }
         if(id && action==='editar'){
            
           fetchProduct()
         }else{
            setProducto({id_inventario:null,id_almacen:null,descripcion:null,cantidad:null});
         }
    },[id])

   //tener un handler, tener un if, si action es editar usar las cosas para editar, si action es añadir usar la api añadir
    return (
           <Form styling={{ width: '100%' }}>
            <div>
                <div>
                    <InputF value={producto.id_inventario } {...InputCodigoProps} />
                </div>

                <div>
                    <InputF value={producto.descripción } {...InputDescripcionProps} />
                </div>

                <div>
                    <InputF {...InputIngresoProps} />
                </div>

                <div>
                    <InputF {...InputSalidaProps} />
                </div>
                <div className={Styles.FormFooter}>
                    <ButtonF text='Añadir' />
                    <ButtonF text='Cancelar' />

                </div>
            </div>
        </Form> 
    )
}
