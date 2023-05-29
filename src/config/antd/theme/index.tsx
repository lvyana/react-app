/**
 * @file antd 定制主题
 * @author ly
 * @createDate 2022年11月19日
 */
import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { GET_THEME } from '@/store/reducers/layout';
import theme1 from './module/white';
import theme2 from './module/dark';

const useTheme = () => {
	const theme = useSelector(GET_THEME);

	const themeConfig = useMemo(() => {
		if (theme === 'white') {
			return theme1;
		} else if (theme === 'dark') {
			return theme2;
		}
	}, [theme]);

	return { themeConfig };
};

export default useTheme;
