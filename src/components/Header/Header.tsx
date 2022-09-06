import React from 'react';

import styles from './Header.module.scss';

export const Header = () => {

    return (
        <header>
            <h1 className={styles.title}>My places</h1>
            <button className={styles.btn}>Add new place</button>
            <form>
                <input type="text" />
                <button className={styles.btn}>Search</button>
            </form>
        </header>
    )

}