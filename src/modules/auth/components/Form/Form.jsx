import styles from './form.module.css'

function Form({ children, title, onSubmit, styling }) {
    return (
        <form className={`${styles.form} shadow-sm`} onSubmit={onSubmit} style={{...styling}}>
            <h3 className={styles.form_title}>{title}</h3>
            {children}
        </form>
    )
}

export default Form