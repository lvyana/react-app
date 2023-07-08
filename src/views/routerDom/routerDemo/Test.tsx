import React from 'react';
import { createBrowserRouter, useLoaderData, useLocation, useParams } from 'react-router-dom';

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
		</>
	);
};

export default Text;
