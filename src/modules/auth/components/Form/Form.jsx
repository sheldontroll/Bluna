import styles from './form.module.css'

function Form({ children, title }) {
    return (
        <form className={`${styles.form} shadow-sm`}>
            <h3 className={styles.form_title}>{title}</h3>
            {children}
        </form>
    )
}

export default Form