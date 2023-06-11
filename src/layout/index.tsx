/**
 * @file 实现Layout
 * @author ly
 *  @createDate 日期：2020年4月27日
 */
import React, { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, FloatButton } from 'antd';
import Header from '@/layout/header';
import useApi from '@/useHooks/useApi';
import Tour from './tour';
import useAysncComponent from './useAsyncComponent';
import { Content, Footer } from 'antd/es/layout/layout';
import ConfigLayout from './configLayout';
import useConfigLayout from './configLayout/useConfigLayout';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Layouts = () => {
	const { openConfigLayout, onOpenConfigLayout, onCloseConfigLayout } = useConfigLayout();

	// 初始化api数据
	useApi();

	return (
		<Layout>
			<Header></Header>

			<Content className="site-layout p-4" style={{ minHeight: 'calc(100vh - 64px)' }}>
				<Outlet />
			</Content>
			{/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}

			<Tour></Tour>
			<FloatButton.Group shape="circle" style={{ right: 24 }}>
				<FloatButton.BackTop visibilityHeight={600} />
				<ConfigLayout open={openConfigLayout} onOpen={onOpenConfigLayout} onClose={onCloseConfigLayout}></ConfigLayout>
			</FloatButton.Group>
		</Layout>
	);
};

const AsyncLayout = () => useAysncComponent(Layouts);

export default AsyncLayout;
