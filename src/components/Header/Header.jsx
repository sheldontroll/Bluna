import styles from './header.module.css'
import Image from '../Image/Image'
import Logo from '../../assets/logo.png'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../../modules/auth/hooks/useAuth'

const ImageProps = {
    width: '100px',
    alt: 'logo',
    src: Logo
}

function Header() {

    const location = useLocation()

    const formatPathName = (pathName) => {
        const currentPath = pathName.split('/')
            .filter(segment => segment)
            .pop()

        return currentPath ?? "login"
    }

    const { handleLogout } = useAuth()



    return (
        <header className={styles.header}>
            <div className={`${styles.header_wrapper} container`}>
                <div className={styles.current_page_wrapper}>
                    <h1 className={styles.current_page}>
                        {
                            formatPathName(location.pathname)
                        }
                    </h1>

                    {
                        localStorage.getItem('token') &&
                        <a className={styles.logout} onClick={() => handleLogout()}>Logout</a>

                    }
                </div>

                <div className={styles.logo_wrapper}>
                    <Image {...ImageProps} />
                </div>
            </div>
        </header>
    )
}

export default Header