import styles from './button.module.css'


function Button(ButtonProps) {
    return (
        <button className={styles.btn} {...ButtonProps}>{ButtonProps.text}</button>
    )
}

export default Button