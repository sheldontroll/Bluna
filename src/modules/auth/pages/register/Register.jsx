import { Link } from 'react-router-dom';

import styles from './register.module.css';
import Form from '../../components/Form/Form';
import Input from '../../../../components/Input/Input';
import Select from '../../../../components/Select/Select';
import { options } from '../../constants/constants';

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

const InputFirstNameProps = {
    type: 'text',
    placeholder: 'John',
    name: 'firstname',
    id: 'firstname',
    label: 'Nombre'
}

const InputLastNameProps = {
    type: 'text',
    placeholder: 'Doe',
    name: 'lastname',
    id: 'lastname',
    label: 'Apellidos'
}

const InputSubmitProps = {
    type: 'submit',
    value: 'Register',
}

function Register() {
    return (
        <div className={styles.register}>
            <Form title='Regístrate en la plataforma'>
                <div className="field">
                    <Input {...InputFirstNameProps} />
                </div>

                <div className="field">
                    <Input {...InputLastNameProps} />
                </div>

                <div className='field'>
                    <Input {...InputEmailProps} />
                </div>
                <div className="field">
                    <Input {...InputPasswordProps} />
                </div>

                <div className='field'>
                    <Select
                        value={'default'}
                        options={options}
                    />
                </div>


                <Input {...InputSubmitProps} styling={{ backgroundColor: '#2E76FE', color: '#ffffff' }} />

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