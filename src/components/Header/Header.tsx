import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../features';
import { setCoordinate } from '../../features/coordinate-slice';
import { LatLngExp } from '../../types/places';
import { AutocompleteInput } from '../AutocompleteInput/AutocompleteInput';

import styles from './Header.module.scss';



export const Header = () => {

    const dispatch = useDispatch();
    const [center, setCenter] = useState<LatLngExp>();
    const coordinate = useSelector((state: RootState) => state.coordinate.coordinates);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (center?.length) {
            console.log(center);
            dispatch(setCoordinate(center));
            console.log('zmieniono w header', coordinate);
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