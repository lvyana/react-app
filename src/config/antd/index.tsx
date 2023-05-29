/**
 * @file antd组件定制
 * @author ly
 * @createDate 2022年11月19日
 */
import React, { FC } from 'react';
import { ConfigProvider } from 'antd';
import useAntdSize from './size';
import useTheme from './theme';

// 中文
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('en');

interface ThemeProps {
	children: React.ReactNode;
}

// ----------------------------------------------------------------

const Theme: FC<ThemeProps> = ({ children }) => {
	const { size } = useAntdSize();
	const { themeConfig } = useTheme();
	return (
		<ConfigProvider locale={zhCN} theme={themeConfig} componentSize={size}>
			{children}
		</ConfigProvider>
	);
};

export default Theme;
