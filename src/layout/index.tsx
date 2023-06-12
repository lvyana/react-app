/**
 * @file 实现Layout
 * @author ly
 *  @createDate 日期：2020年4月27日
 */
import React, { FC, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Tabs } from 'antd';
import Header from '@/layout/header';
import useApi from '@/useHooks/useApi';
import useAysncComponent from './useAsyncComponent';
import { Content, Footer } from 'antd/es/layout/layout';
import LeftMenu from './menu/LeftMenu';
import { useAppSelector } from '@/store';
import { GET_MENU_LAYOUT, GET_TABSMAIN_LAYOUT } from '@/store/reducers/layout';
import OtherFunctions from './otherFunctions';
import styleLayoutConfig, { StyleLayout } from './styleLayoutConfig';
import TabsMain from './TabsMain';
import CradMenu from './menu/CradMenu';

type LayoutsProps = {
	layoutStyle: StyleLayout;
	tabs: React.ReactNode;
	CradMenu: React.ReactNode;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Ilayout = () => {
	// 初始化api数据
	useApi();
	return (
		<>
			<LayoutStyle></LayoutStyle>
			<OtherFunctions></OtherFunctions>
		</>
	);
};

// 控制布局
const LayoutStyle = () => {
	// 获取当前菜单布局
	const menuLayout = useAppSelector(GET_MENU_LAYOUT);

	// 获取当前tabs布局
	const tabsMainLayout = useAppSelector(GET_TABSMAIN_LAYOUT);

	const tabs = useMemo(() => {
		if (tabsMainLayout === 1) {
			return <></>;
		} else {
			return <TabsMain></TabsMain>;
		}
	}, [tabsMainLayout]);

	// 所有布局的样式
	const { styleLayout } = styleLayoutConfig;

	// 布局对应的样式
	const layoutStyle = styleLayout[menuLayout];

	if (menuLayout === 1) {
		return <Layouts layoutStyle={layoutStyle} tabs={tabs} CradMenu={<CradMenu></CradMenu>}></Layouts>;
	} else if (menuLayout === 2) {
		return (
			<LeftMenu>
				<Layouts layoutStyle={layoutStyle} tabs={tabs} CradMenu={<CradMenu></CradMenu>}></Layouts>
			</LeftMenu>
		);
	}
	return <></>;
};

// 布局
const Layouts: FC<LayoutsProps> = ({ layoutStyle, tabs, CradMenu }) => {
	return (
		<Layout>
			<Header>{CradMenu}</Header>

			<Content className="site-layout p-4" style={{ minHeight: 'calc(100vh - 64px)', ...layoutStyle.main }}>
				{tabs}
				<Outlet />
			</Content>
			{/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
		</Layout>
	);
};

const AsyncLayout = () => useAysncComponent(Ilayout);

export default AsyncLayout;
