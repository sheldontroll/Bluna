import styles from './input.module.css'


function Input(InputProps) {
    return (
        <>
            {
                InputProps.label &&
                <label className={styles.label} htmlFor={InputProps.label}>{ }</label>
            }
            <input {...InputProps} className={styles.input} />
        </>
    )
}

export default Input