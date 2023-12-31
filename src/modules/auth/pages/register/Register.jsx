import { Link } from 'react-router-dom';

import styles from './register.module.css';
import Form from '../../components/Form/Form';
import Input from '../../../../components/Input/Input';
import Select from '../../../../components/Select/Select';
import { options } from '../../constants/constants';
import { useState } from 'react';
import ErrorForm from '../../components/ErrorForm/ErrorForm';
import { useNavigate } from 'react-router-dom';


const InputEmailProps = {
    type: 'email',
    placeholder: 'johndoe@johndoe.com',
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

const InputFirstNameProps = {
    type: 'text',
    placeholder: 'Nombres',
    name: 'first_name',
    id: 'first_name',
    label: 'Nombre'
}

const InputLastNameProps = {
    type: 'text',
    placeholder: 'Apellidos',
    name: 'last_name',
    id: 'last_name',
    label: 'Apellidos'
}

const InputSubmitProps = {
    type: 'submit',
    value: 'Registrar',
}

function Register() {
    const [register, setRegister] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        hasErrors: false
    })

    const navigate = useNavigate()

    const handleRegister = (event) => {
        setRegister((prev) => ({ ...prev, [event.target.id]: event.target.value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (Object.values(register).includes("")) {
            setRegister(prev => ({ ...prev, hasErrors: true }))
            return
        }

        setRegister(prev => ({ ...prev, hasErrors: false }))

        const newUser = {
            first_name: register.first_name,
            last_name: register.last_name,
            email: register.email,
            password: register.password
        };

        const request = await fetch('http://localhost:8000/auth/register', {
            headers: {
                'Content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                ...newUser
            })
        })

        const response = await request.json()
        console.log(response)
        if (!response.ok) {
            console.log('entrando if')
            return
        }
        console.log('entrando1')
        localStorage.setItem('userinfo', response.newUser);
        localStorage.setItem('token', response.token);
        navigate('/dashboard')
    }


    return (
        <div className={styles.register}>
            <Form title='Regístrate en la plataforma' onSubmit={handleSubmit}>
                <div className="field">
                    <Input {...InputFirstNameProps} onChange={handleRegister} value={register.first_name} />
                </div>

                <div className="field">
                    <Input {...InputLastNameProps} onChange={handleRegister} value={register.last_name} />
                </div>

                <div className='field'>
                    <Input {...InputEmailProps} onChange={handleRegister} value={register.email} />
                </div>

                <div className="field">
                    <Input {...InputPasswordProps} onChange={handleRegister} value={register.password} />
                </div>

               

                <Input {...InputSubmitProps} style={{ backgroundColor: '#2E76FE', color: '#ffffff', cursor: 'pointer', fontWeight: 'bold' }} />

                {
                    register.hasErrors && <ErrorForm msg={"Rellena todos los campos"} />
                }

                <Link style={{
                    color: '#000000',
                    textAlign: 'center',
                    textDecoration: 'underline'
                }} to={'/login'}>Click aquí para loguearte</Link>
            </Form>
        </div>

    )
}

export default Register