import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { useRoutes } from 'react-router-dom';
import router from '@/router';

function App() {
	console.log(process.env.REACT_APP_BASE_PATH);

	return useRoutes(router);
}

export default App;
