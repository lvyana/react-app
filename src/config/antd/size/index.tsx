/**
 * @file antd组件大小
 * @author ly
 * @createDate 2022年11月19日
 */
import React from 'react';
import { useAppSelector } from '@/store';
import { GET_SIZE } from '@/store/reducers/layout';

const useAntdSize = () => {
	const size = useAppSelector(GET_SIZE);

	return { size };
};

export default useAntdSize;
