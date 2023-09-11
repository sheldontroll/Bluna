import { Link } from 'react-router-dom';

import styles from './register.module.css';
import Form from '../../components/Form/Form';
import Input from '../../../../components/Input/Input';
import Select from '../../../../components/Select/Select';
import { options } from '../../constants/constants';
import { useState } from 'react';
import ErrorForm from '../../components/ErrorForm/ErrorForm';

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
    name: 'firstname',
    id: 'firstname',
    label: 'Nombre'
}

const InputLastNameProps = {
    type: 'text',
    placeholder: 'Apellidos',
    name: 'lastname',
    id: 'lastname',
    label: 'Apellidos'
}

const InputSubmitProps = {
    type: 'submit',
    value: 'Registrar',
}

function Register() {
    const [register, setRegister] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: 'default',
        hasErrors: false
    })

    const handleRegister = (event) => {
        setRegister((prev) => ({ ...prev, [event.target.id]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.values(register).includes("")) {
            setRegister(prev => ({ ...prev, hasErrors: true }))
            return
        }

        setRegister(prev => ({ ...prev, hasErrors: false }))
    }


    return (
        <div className={styles.register}>
            <Form title='Regístrate en la plataforma' onSubmit={handleSubmit}>
                <div className="field">
                    <Input {...InputFirstNameProps} onChange={handleRegister} value={register.firstname} />
                </div>

                <div className="field">
                    <Input {...InputLastNameProps} onChange={handleRegister} value={register.lastname} />
                </div>

                <div className='field'>
                    <Input {...InputEmailProps} onChange={handleRegister} value={register.email} />
                </div>

                <div className="field">
                    <Input {...InputPasswordProps} onChange={handleRegister} value={register.password} />
                </div>

                <div className='field'>
                    <Select
                        id={'role'}
                        value={register.role}
                        options={options}
                        handler={handleRegister}
                    />
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