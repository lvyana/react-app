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

// 全局注入antd组件调用方法
import ContextMethod from './context';

interface ThemeProps {
	children: React.ReactNode;
}

// ----------------------------------------------------------------

const AntdConfig: FC<ThemeProps> = ({ children }) => {
	const { size } = useAntdSize();
	const { themeConfig } = useTheme();
	return (
		// antd全局配置
		<ConfigProvider locale={zhCN} theme={themeConfig} componentSize={size}>
			{/* 自定义注入方法 */}
			<ContextMethod>{children}</ContextMethod>
		</ConfigProvider>
	);
};

export default AntdConfig;
