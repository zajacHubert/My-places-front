import React, { useState, ChangeEvent } from 'react';
import { useFetchPlacesQuery } from '../../features/api-places-slice';
import { AutoComplete, AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns'

import styles from './AutocompleteInput.module.scss';
import Autocomplete from 'react-autocomplete';




export const AutocompleteInput = () => {
    const { data } = useFetchPlacesQuery();
    const [value, setValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestions = data;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <>
            <div className={styles.autocomplete}>
                <input
                    value={value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    type="text"
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                {showSuggestions &&
                    <ul>
                        {suggestions?.map(el => (
                            <li className={styles.suggestion} key={el.id}>{el.name}</li>
                        ))}
                    </ul>}
            </div>
        </>
    )

}