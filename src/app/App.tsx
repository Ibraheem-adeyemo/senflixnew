import React from 'react';
import HomePage from './pages/Home-pages'
import Navbar from './components/Navbar.component';

import './app.scss';

export const App:() => any = () => {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
