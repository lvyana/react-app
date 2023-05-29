/**
 * @file 实现Layout
 * @author ly
 *  @createDate 日期：2020年4月27日
 */
import React, { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, FloatButton } from 'antd';
import Headerregion from '@/layout/header';
import useThemeHooks from '@/config/antd/theme/useThemeHooks';
import useApi from '@/useHooks/useApi';
import Tour from './tour';
import useAysncComponent from './useAsyncComponent';
import { Footer } from 'antd/es/layout/layout';

const { Header, Content } = Layout;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Layouts = () => {
	const { token } = useThemeHooks();

	// 初始化api数据
	useApi();

	const headerStyle: CSSProperties = {
		position: 'sticky',
		top: 0,
		width: '100%',
		alignItems: 'center',
		backgroundColor: token.colorBgBase,
		zIndex: 999
	};

	return (
		<Layout>
			<Header style={headerStyle}>
				<Headerregion />
			</Header>
			<Content className="site-layout p-4" style={{ minHeight: 'calc(100vh - 64px)' }}>
				<Outlet />
			</Content>
			{/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
			<FloatButton.BackTop visibilityHeight={600} />
			<Tour></Tour>
		</Layout>
	);
};

const AsyncLayout = () => useAysncComponent(Layouts);

export default AsyncLayout;
