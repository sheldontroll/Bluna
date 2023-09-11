import { Link, useNavigate } from "react-router-dom"
import Input from "../../../../components/Input/Input"
import Form from "../../components/Form/Form"

import styles from './login.module.css'
import { useState } from "react"
import ErrorForm from "../../components/ErrorForm/ErrorForm"
import { useAuth } from "../../hooks/useAuth"

const InputEmailProps = {
    type: 'email',
    placeholder: 'tucorreo@ejemplo.com',
    name: 'email',
    id: 'email',
    label: 'Correo electrónico'
}

const InputPasswordProps = {
    type: 'password',
    placeholder: 'Contraseña',
    name: 'password',
    id: 'password',
    label: 'Contraseña'
}

const InputSubmitProps = {
    type: 'submit',
    value: 'Ingresar',
}

function Login() {

    const [login, setLogin] = useState({
        email: '',
        password: '',
        hasErrors: false
    })

    const { handleAuthenticate } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        setLogin(prev => ({ ...prev, [event.target.id]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.values(login).includes("")) {
            setLogin(prev => ({ ...prev, hasErrors: true }))
            return
        }

        setLogin(prev => ({ ...prev, hasErrors: false }))

        handleAuthenticate({
            username: 'user',
            roles: ['admin']
        })

        navigate('/dashboard')
    }

    return (
        <div className={styles.login}>
            <Form title='Ingresa a la plataforma' onSubmit={handleSubmit}>
                <div className='field'>
                    <Input {...InputEmailProps} onChange={handleLogin} value={login.email} />
                </div>
                <div className="field">
                    <Input {...InputPasswordProps} onChange={handleLogin} value={login.password} />
                </div>

                <Input {...InputSubmitProps} style={{ backgroundColor: '#2E76FE', color: '#ffffff', cursor: 'pointer', fontWeight: 'bold' }} />

                {
                    login.hasErrors && <ErrorForm msg={"Rellene todos los campos"} />
                }

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