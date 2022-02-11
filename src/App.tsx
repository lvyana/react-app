import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function App() {
  const isQiankun = (path: string) => {
    if ((window as any).__POWERED_BY_QIANKUN__) {
      return '/' + process.env.REACT_APP_BASE_PATH + path;
    } else {
      return path;
    }
  };
  console.log(process.env.REACT_APP_BASE_PATH);

  return (
    <div className="App">
      <Button type="primary">QWE </Button>
      <Link to={isQiankun('/app')}>Invoices</Link> |
      <Link to={isQiankun('/about')}>Expenses</Link>
    </div>
  );
}

export default App;
