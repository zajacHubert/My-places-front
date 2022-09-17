import React, { useState, ChangeEvent } from 'react';
import { useFetchPlacesQuery } from '../../features/api-places-slice';

import styles from './AutocompleteInput.module.scss';
import { Center } from '../../types/places';

interface Props {
    setCenter: React.Dispatch<React.SetStateAction<Center | undefined>>;
}

export const AutocompleteInput = ({ setCenter }: Props) => {
    const { data } = useFetchPlacesQuery();
    const [value, setValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = data;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('change')
        setValue(e.target.value);
    }

    const handleClick = (name: string, lat: number, lon: number) => {
        console.log('CLICK');
        setValue(name);
        setCenter({ lat, lon });
    }

    return (
        <>
            <div className={styles.autocomplete}>
                <input
                    value={value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    type="text"
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 500)}
                />
                {showSuggestions &&
                    <ul>
                        {suggestions?.map(el => (
                            <li className={styles.suggestion} key={el.id} onClick={() => handleClick(el.name, el.lat, el.lon)}>{el.name}</li>
                        ))}
                    </ul>}
            </div>
        </>
    )

}