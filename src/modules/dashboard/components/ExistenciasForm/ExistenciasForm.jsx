import Form from "../../../auth/components/Form/Form"
import InputF from "../../../../components/Input/Input"
import ButtonF from "../Button/Button"
import Styles from "./ExistenciasForm.module.css"
export default function ExistenciasForm(){
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
    return(
        <Form styling={{width:'100%'}}>
            <div>
                <div>
                    <InputF {...InputCodigoProps}/>
                </div>

                <div>
                    <InputF {...InputDescripcionProps}/>
                </div>

                <div>
                    <InputF {...InputIngresoProps}/>
                </div>

                <div>
                    <InputF {...InputSalidaProps}/>
                </div>
                <div className={Styles.FormFooter}>
                    <ButtonF text='Añadir' />
                    <ButtonF text='Cancelar' />

                </div>
            </div>
        </Form>
    )
}
