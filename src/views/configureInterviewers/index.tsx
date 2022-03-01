import React from 'react';
import SearchForm from './components/SearchForm';
import useHasPermiss from '@/utils/permissions';

const ConfigureInterviewers = () => {
	const { getPermiss } = useHasPermiss();

	console.log(getPermiss());

	return (
		<div>
			<SearchForm></SearchForm>
		</div>
	);
};

export default ConfigureInterviewers;
