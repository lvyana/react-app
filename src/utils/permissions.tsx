import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const useHasPermiss = () => {
	const permissList = useSelector((state: RootState) => state.user.permiss);
	console.log(permissList);

	const getPermiss = (hasPermiss?: string) => {
		if (permissList.indexOf('*:*:*') > -1) return true;
		if (permissList.indexOf(hasPermiss) > -1) {
			return true;
		} else {
			return false;
		}
	};
	return {
		getPermiss
	};
};
export default useHasPermiss;
