import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { AddFormView } from './views/AddFormView';
import { MainView } from './views/MainView';

export const App = () => {

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/add" element={<AddFormView />} />
      </Routes>
    </div>
  );
}


