import styles from './select.module.css'



function Select({ options, value, handler, id }) {
    return (
        <select className={styles.select} value={value} onChange={handler} id={id}>
            {
                options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.name}</option>
                ))
            }
        </select>
    )
}

export default Select