import React from 'react';
import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { Columns } from './components/Columns';
import './App.scss';

export const App = () => (
  <main className="main">
    <Menu />
    <div className="main__container">
      <Header />
      <Columns />
    </div>
  </main>
);
