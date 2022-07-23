import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Text = () => {
	const location = useLocation();
	const params = useParams();
	console.log(location, params);

	return <div>text{params.id}</div>;
};

export default Text;
