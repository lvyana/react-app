import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GET_SELECTOR_PERMISS } from '@/store/reducers/user';

const useHasPermiss = () => {
	const permissList = useSelector(GET_SELECTOR_PERMISS);

	const hasPermiss = (hasPermiss?: string) => {
		if (!hasPermiss || permissList.indexOf('*:*:*') > -1) return true;
		if (permissList.indexOf(hasPermiss) > -1) {
			return true;
		} else {
			return false;
		}
	};
	return {
		hasPermiss
	};
};
export default useHasPermiss;
