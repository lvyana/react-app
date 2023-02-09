/**
 * @file antd 定制主题 中文
 * @author ly
 * @createDate 2022年11月19日
 */
import React, { FC, useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import { GET_THEME, ThemeType } from '@/store/reducers/layout';
import theme1 from './theme1';
import theme2 from './theme2';

// 中文
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('en');

interface ThemeProps {
	children: React.ReactNode;
}
const Theme: FC<ThemeProps> = ({ children }) => {
	const theme = useSelector(GET_THEME);

	const themeMeno = useMemo(() => {
		if (theme === 'theme1') {
			return theme1;
		} else if (theme === 'theme2') {
			return theme2;
		}
	}, [theme]);

	return (
		<ConfigProvider locale={zhCN} theme={{ ...themeMeno }}>
			{children}
		</ConfigProvider>
	);
};

export default Theme;
