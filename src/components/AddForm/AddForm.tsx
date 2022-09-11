import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlaceStatus } from '../../types/place-status.enum';
import { addPlace } from '../../utils/axios-functions';
import { geocode } from '../../utils/geocoding';
import { Modal } from '../Modal/Modal';
import styles from './AddForm.module.scss';

export const AddForm = () => {

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        name: '',
        description: '',
        status: PlaceStatus.TO_SEE,
        address: '',
    });

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const { lat, lon } = await geocode(form.address);
            const formToAdd = { ...form, lat, lon };
            await addPlace(formToAdd);

        } finally {
            setLoading(false);
            setForm({
                name: '',
                description: '',
                status: PlaceStatus.TO_SEE,
                address: '',
            });
            setShow(true);
        }
    }

    return (
        <>
            <div>
                <header>
                    <Link to={'/'} style={{ textDecoration: 'none' }}><h1 className={styles.title} >My places</h1></Link>
                </header>

                <h2 className={styles.form__title}>Add new place</h2>

                <form className={styles.form} onSubmit={sendForm}>

                    <label className={styles.form__label}>
                        Name:
                        <input
                            type="text"
                            className={styles.form_input}
                            name="name"
                            required
                            value={form.name}
                            onChange={e => updateForm(e.target.name, e.target.value)}
                        />
                    </label>

                    <label className={styles.form__label}>
                        Description:
                        <textarea
                            className={styles.form_input}
                            name="description"
                            required
                            value={form.description}
                            onChange={e => updateForm(e.target.name, e.target.value)}
                        />
                    </label>

                    <label className={styles.form__label}>
                        Status:
                        <select
                            className={styles.form_input}
                            name="status"
                            value={form.status}
                            onChange={e => updateForm(e.target.name, e.target.value)}
                        >
                            <option value='TO_SEE'>To see</option>
                            <option value='VISITED_POSITIVELY'>Positively visited</option>
                            <option value='VISITED_NEGATIVELY'>Negatively visited</option>
                        </select>
                    </label>

                    <label className={styles.form__label}>
                        Address:
                        <input
                            type="text"
                            className={styles.form_input}
                            name="address"
                            required
                            value={form.address}
                            onChange={e => updateForm(e.target.name, e.target.value)}
                        />
                    </label>

                    <button className={styles.form__btn}>Add</button>

                </form>
            </div>
            {show && <Modal setShow={setShow} />}
        </>
    )
}