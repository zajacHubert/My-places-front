import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {

    return (
        <header>
            <h1 className={styles.title}>My places</h1>
            <Link to={'/add'} className={styles.btn}>Add new place</Link>
            <form>
                <input type="text" />
                <button className={styles.btn}>Search</button>
            </form>
        </header>
    )

}