import styles from './error-form.module.css'

function ErrorForm({ msg }) {
    return (
        <div className={styles.error_form}>{msg}</div>
    )
}

export default ErrorForm