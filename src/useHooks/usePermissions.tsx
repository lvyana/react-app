import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPermiss } from '@/redux/reducers/user';

const useHasPermiss = () => {
	const permissList = useSelector(getPermiss);

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
