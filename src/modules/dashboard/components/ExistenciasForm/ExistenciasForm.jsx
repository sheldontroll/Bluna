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
    label: 'Codigo',
    disabled: true
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

export default function ExistenciasForm({ id, action }) {
    const [producto, setProducto] = useState({ id_almacen: "", descripción: "", cantidad: "", ingresos: 0, salidas: 0 })

    useEffect(() => {
        const fetchProduct = async () => {
            const url = `http://localhost:3000/products/${id}`
            const recibir = await fetch(url)
            const response = await recibir.json()
            setProducto(response);
        }

        if (id && action === 'editar') {
            fetchProduct()
        } else {
            setProducto({ id_almacen: "", descripción: "", cantidad: "" });
        }
    }, [id])


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
            descripcion: producto.descripción,
            id_almacen: producto.id_almacen,
            cantidad: producto.cantidad,
        };

        
        

        if (action === 'añadir') {
            const request = await fetch('http://localhost:3000/products', {
                headers: {
                    'Content-type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    ...newProducto
                })
            })
        } else {
            // TODO:
            // haces literalmente lo mismo que añadir, unicamente cambias la url
            // bad request - revisa que la data que le estes enviando sea la misma que el backend esta esperando.
            // error 500 - revisa que la data que le estes enviando al backend le este llegando correctamente
            // method not supported - ESTO SIGNIFICA QUE EL METODO DEL FETCH NO ES COMPATIBLE CON EL METODO HTTP QUE ESTA ESPERANDO TU ENDPOINT
            
            const sumarRequest = await fetch(`http://localhost:3000/products/${id}/sumar/${producto.ingresos}`, {
            headers: {
                'Content-type': 'application/json',
             },
                method: 'PUT',
                body: JSON.stringify({
                id_inventario: id,
                cantidad: producto.ingresos,
             }),
            });
            const restarRequest = await fetch(`http://localhost:3000/products/${id}/restar/${producto.salidas}`, {
            headers: {
            'Content-type': 'application/json',
            },
                    method: 'PUT',
                    body: JSON.stringify({
                    id_inventario: id,
                    cantidad: producto.salidas,
                }),
            });
        }

        location.reload();
    }
    return (
        <Form styling={{ width: '100%' }} onSubmit={handleSubmit} >
            <div>
                {
                    action === 'editar' && (
                        <div>
                            <InputF {...InputCodigoProps} />
                        </div>
                    )
                }

                <div>
                    <InputF value={producto.descripción} {...InputDescripcionProps} onChange={handleAñadir} />
                </div>

                <div>
                    <InputF value={producto.id_almacen}  {...InputAnaquelProps} onChange={handleAñadir} />
                </div>

                <div>
                    <InputF  value={producto.ingresos} {...InputIngresoProps} onChange={handleAñadir} />
                </div>

                <div>
                    <InputF value={producto.salidas} {...InputSalidaProps} onChange={handleAñadir} />
                </div>

                <div>
                    <InputF value={producto.cantidad}  {...InputCantidadProps} onChange={handleAñadir} />
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
