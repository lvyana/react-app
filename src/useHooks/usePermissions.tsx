/**
 *	@name 实现权限
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React from 'react';
import { useAppSelector } from '@/store';
import { GET_SELECTOR_PERMISS } from '@/store/reducers/user';

const useHasPermiss = () => {
	const permissList = useAppSelector(GET_SELECTOR_PERMISS);

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
