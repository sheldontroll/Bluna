import React from 'react';
import styles from './modal.module.css'

function Modal({isOpen, onClose, children}){
    return(
        <>
            {
                isOpen ? (
                <div className={styles.overlay}>
                    <div className={styles.overlay_bg} onClick={onClose} />
                    <div className={styles.overlay_container}>
                        <div className={styles.overlay_controls}>
                            <button className={styles.overlay_close} type='button' onClick={onClose} />
                        </div>
                        {children}
                    </div>
                </div>
                ) : null
            }
        </>
    )
}

export default Modal;

