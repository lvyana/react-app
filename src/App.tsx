import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import router from '@/router';
import '@/styles/index.less';

function App() {
	return useRoutes(router);
}

export default App;
