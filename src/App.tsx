import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { Map } from './components/Map/Map';

export const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<Map />} />
        {/* <Route path="/add" element={<AddForm />} /> */}
      </Routes>
    </div>
  );
}


