import React from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const List = () => {
	const location = useLocation();
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	// console.log(location, params, searchParams.get('ab'));
	const onSearchParams = () => {
		setSearchParams('ab=2');
	};
	return <div onClick={onSearchParams}>List{searchParams.get('ab')}</div>;
};

export default List;
