import styles from './image.module.css'


function Image({ width, heigth, alt, src }) {
    return (
        <img
            className={styles.image}
            src={src}
            height={heigth}
            alt={alt}
            width={width} />
    )
}

export default Image