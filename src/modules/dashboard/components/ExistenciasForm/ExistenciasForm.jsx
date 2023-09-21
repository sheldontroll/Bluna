import Form from "../../../auth/components/Form/Form"
import InputF from "../../../../components/Input/Input"
import ButtonF from "../Button/Button"
import Styles from "./ExistenciasForm.module.css"
import { useEffect, useState } from "react"
import ErrorForm from "../../../auth/components/ErrorForm/ErrorForm"
const InputCodigoProps = {
    id: 'codigo',
    name: 'codigo',
    placeholder: 'ingresa el codigo',
    type: 'number',
    label: 'Codigo'
}
const InputAnaquelProps = {
    id: 'id_almacen',
    name: 'anaquel',
    placeholder: 'Número de Anaquel',
    type: 'number',
    label: 'anaquel'
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
const InputCantidadProps = {
    id: 'cantidad',
    name: 'cantidad',
    placeholder: 'Cantidad Total',
    type: 'number',
    label: 'Cantidad'
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

    useEffect(() => {
        if (action === 'añadir') {
            setProducto({
                codigo: '',
                descripcion: '',
                id_almacen: '',
                cantidad: '',
                hasErrors: false
            });
        }
    }, [action]);

    const handleAñadir = (event) => {
        setProducto((prev) => ({ ...prev, [event.target.id]: event.target.value }))
    }

    

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (Object.values(producto).includes("")) {
            setProducto(prev => ({ ...prev, hasErrors: true }))
            return
        }

        setProducto(prev => ({ ...prev, hasErrors: false }))

        const newProducto = {
            codigo: `${producto.codigo}`,
            descripcion: producto.descripcion,
            id_almacen: producto.id_almacen,
            cantidad: producto.cantidad,
        };

        const request = await fetch('http://localhost:3000/products', {
            headers: {
                'Content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                ...newProducto
            })
        })

        const response = await request.json()

        if (!response.ok) {
            return
        }

        localStorage.setItem('token', response.user.token);
        navigate('/dashboard/inventory/existencias')
    }
   //tener un handler, tener un if, si action es editar usar las cosas para editar, si action es añadir usar la api añadir
    return (
           <Form styling={{ width: '100%' }} onSubmit={handleSubmit} >
            <div>
                <div>
                    <InputF value={producto.id_inventario }  {...InputCodigoProps} onChange={handleAñadir} />
                </div>

                <div>
                    <InputF value={producto.descripción} {...InputDescripcionProps} onChange={handleAñadir}  />
                </div>

                <div>
                    <InputF value={producto.id_almacen}  {...InputAnaquelProps} onChange={handleAñadir} />
                </div>

                <div>
                    <InputF {...InputIngresoProps} />
                </div>

                <div>
                    <InputF {...InputSalidaProps} />
                </div>

                <div>
                    <InputF value={producto.cantidad}  {...InputCantidadProps} onChange={handleAñadir}  />
                </div>
                <div className={Styles.FormFooter}>
                    <ButtonF text='Añadir' />
                    <ButtonF text='Cancelar' />

                </div>
            </div>
            {
                    producto.hasErrors && <ErrorForm msg={"Rellena todos los campos"} />
            }
        </Form> 
    )
}
