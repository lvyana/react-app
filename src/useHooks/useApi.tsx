import React, { useState, useEffect } from 'react';
// 引入相关的hooks
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getHeaderConfig } from '@/store/reducers/globalConfig';

const useApi = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getHeaderConfig());
	}, []);
};

export default useApi;
