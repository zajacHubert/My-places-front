import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCoordinate } from '../../features/coordinate-slice';
import { Center } from '../../types/places';
import { AutocompleteInput } from '../AutocompleteInput/AutocompleteInput';

import styles from './Header.module.scss';



export const Header = () => {

    const dispatch = useDispatch();
    const [center, setCenter] = useState<Center>();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (center) {
            dispatch(setCoordinate(center));
        }

    }

    return (
        <header>
            <h1 className={styles.title}>My places</h1>
            <Link to={'/add'} className={styles.btn}>Add new place</Link>
            <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
                <AutocompleteInput setCenter={setCenter} />
                <button className={styles.btn}>Search</button>
            </form>
        </header>
    )

}