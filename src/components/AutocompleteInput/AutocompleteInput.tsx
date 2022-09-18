import React, { useState, ChangeEvent } from 'react';
import { useFetchPlacesQuery } from '../../features/api-places-slice';
import { LatLngExp } from '../../types/places';

import styles from './AutocompleteInput.module.scss';

interface Props {
    setCenter: React.Dispatch<React.SetStateAction<LatLngExp | undefined>>;
}

export const AutocompleteInput = ({ setCenter }: Props) => {
    const { data } = useFetchPlacesQuery();
    const [value, setValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = data?.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleClick = (name: string, lat: number, lon: number) => {
        setValue(name);
        setCenter([[lat, lon]]);
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