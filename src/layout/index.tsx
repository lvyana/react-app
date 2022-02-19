import React from 'react';
import { Button, DatePicker } from 'antd';
import { Link } from 'react-router-dom';

const Layout = () => {
	const isQiankun = (path: string) => {
		if ((window as any).__POWERED_BY_QIANKUN__) {
			return '/' + process.env.REACT_APP_BASE_PATH + path;
		} else {
			return path;
		}
	};
	return (
		<div>
			Layout <DatePicker />
			<Button type="primary">QWE </Button>
			<Link to={isQiankun('/app')}>Invoices</Link> |<Link to={isQiankun('/about')}>Expenses</Link>
		</div>
	);
};

export default Layout;
