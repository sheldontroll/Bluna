import styles from './input.module.css'


function Input({ type, placeholder, name, id, label, value, styling }) {
    return (
        <>
            {
                label &&
                <label className={styles.label} htmlFor={name}>{label}</label>
            }
            <input
                style={{ ...styling }}
                value={value}
                className={styles.input}
                type={type ?? 'text'}
                placeholder={placeholder}
                name={name}
                id={id} />
        </>
    )
}

export default Input