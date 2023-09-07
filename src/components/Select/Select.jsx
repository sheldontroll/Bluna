import styles from './select.module.css'



function Select({ options, value, handler }) {
    return (
        <select className={styles.select} value={value} onChange={handler}>
            {
                options.map(opt => (
                    <option key={opt.value} option={opt.value}>{opt.name}</option>
                ))
            }
        </select>
    )
}

export default Select