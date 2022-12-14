import React, { Dispatch } from "react";
import styles from './Modal.module.scss';
interface Props {
    setShow: Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ setShow }: Props) => {

    const handleClick = () => {
        setShow(false);
    }

    return (
        <div className={styles.overlay} >
            <div className={styles.dialog}>
                <h2 className={styles.dialog__title}>Your place has been successfulyy added! </h2>
                <button
                    className={styles.dialog__btn}
                    onClick={handleClick}
                >
                    ok
                </button>
            </div >
        </div>
    )
}