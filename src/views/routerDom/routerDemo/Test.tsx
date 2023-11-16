import React from 'react';
import { createBrowserRouter, Form, useLoaderData, useLocation, useParams } from 'react-router-dom';

const Text = () => {
	const param = useLoaderData() as number;
	console.log(param);

	const location = useLocation();
	const params = useParams();
	console.log(location, params);

	return (
		<>
			<div>useLoaderData:{param}</div>
			<div>useParams{params.id}</div>
			<div>state:{JSON.stringify(location.state)}</div>
			<>
				<p>登录页面</p>
				<Form method="POST">
					<input type="text" name="username" placeholder="用户名" />
					<input type="password" name="password" placeholder="密码" />
					<button type="submit">Login</button>
				</Form>
			</>
		</>
	);
};

export default Text;
