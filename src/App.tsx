import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Expenses from './views/expenses';
import Invoices from './views/invoices';
import Layout from './layout';

function App() {
  console.log(process.env.REACT_APP_BASE_PATH);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="app" element={<Expenses />} />
        <Route path="about" element={<Invoices />} />
      </Routes>
    </div>
  );
}

export default App;
