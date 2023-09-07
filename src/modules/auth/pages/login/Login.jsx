import { Link } from "react-router-dom"
import Input from "../../../../components/Input/Input"
import Form from "../../components/Form/Form"

import styles from './login.module.css'

const InputEmailProps = {
    type: 'email',
    placeholder: 'johndoe@johndoe.com',
    name: 'email',
    id: 'email',
    label: 'Correo electrónico'
}

const InputPasswordProps = {
    type: 'password',
    placeholder: 'strong password',
    name: 'password',
    id: 'password',
    label: 'Contraseña'
}

const InputSubmitProps = {
    type: 'submit',
    value: 'Login',
}

function Login() {
    return (
        <div className={styles.login}>
            <Form title='Ingresa a la plataforma'>
                <div className='field'>
                    <Input {...InputEmailProps} />
                </div>
                <div className="field">
                    <Input {...InputPasswordProps} />
                </div>

                <Input {...InputSubmitProps} styling={{ backgroundColor: '#2E76FE', color: '#ffffff' }} />

                <Link style={{
                    color: '#000000',
                    textAlign: 'center',
                    textDecoration: 'underline'
                }} to={'/register'}>Click aquí para registrarte</Link>
            </Form>
        </div>
    )
}

export default Login