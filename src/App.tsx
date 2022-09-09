import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { Map } from './components/Map/Map';
import { useFetchPlacesQuery } from './features/places-slice';

export const App = () => {

  const { data = [], isFetching } = useFetchPlacesQuery();
  console.log(data);

  return (
    <div className={styles.container}>
      <Header />
      <div>
        Number of places fetched:{data.length}
        <ul>
          {data.map(el => <li key={el.id}>{el.name}</li>)}
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Map />} />
        {/* <Route path="/add" element={<AddForm />} /> */}
      </Routes>
    </div>
  );
}


