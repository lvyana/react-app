/**
 * @file Layout
 * @author ly
 *  @createDate 日期：2020年4月27日
 */
import React, { FC, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '@/layout/header';
import useApi from '@/useHooks/useApi';
import { useAppSelector } from '@/store';
import { GET_FOOTER_LAYOUT, GET_MENU_LAYOUT, GET_TABSMAIN_LAYOUT } from '@/store/reducers/layout';
import OtherFunctions from './otherFunctions';
import styleLayoutConfig, { StyleLayout } from './styleLayoutConfig';
import TabsMain from './TabsMain';
import CradMenu from './menu/CradMenu';
import Logo from './header/logo';
import useAysncComponent from './useAsyncComponent';
import { Content, Footer } from 'antd/es/layout/layout';
import LeftMenu from './menu/LeftMenu';

/**
 * @param layoutStyle 布局所有需要的样式
 * @param tabsMain 顶部导航栏
 * @param CradMenu 卡片菜单
 * @param footer 底部
 */
type LayoutsProps = {
	layoutStyle: StyleLayout;
	tabsMain: React.ReactNode;
	CradMenu: React.ReactNode;
	footer: React.ReactNode;
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

	// 获取当前footer布局
	const footerLayout = useAppSelector(GET_FOOTER_LAYOUT);

	const tabsMain = useMemo(() => {
		if (tabsMainLayout === 1) {
			return <></>;
		} else {
			return <TabsMain></TabsMain>;
		}
	}, [tabsMainLayout]);

	const cradMenu = useMemo(() => {
		if (menuLayout === 1) {
			return (
				<CradMenu>
					<Logo></Logo>
				</CradMenu>
			);
		} else {
			return <Logo></Logo>;
		}
	}, [menuLayout]);

	const footer = useMemo(() => {
		if (footerLayout === 1) {
			return <></>;
		} else {
			return (
				<Footer style={{ textAlign: 'center', paddingTop: 8 }}>
					<div>react-admin</div>
					<div>react-admin ©2020 Created by ly</div>
				</Footer>
			);
		}
	}, [footerLayout]);

	// 所有布局的样式
	const { styleLayout } = styleLayoutConfig;

	// 布局对应的样式
	const layoutStyle = styleLayout[menuLayout];

	if (menuLayout === 1) {
		return <Layouts layoutStyle={layoutStyle} tabsMain={tabsMain} CradMenu={cradMenu} footer={footer}></Layouts>;
	} else if (menuLayout === 2) {
		return (
			<LeftMenu>
				<Layouts layoutStyle={layoutStyle} tabsMain={tabsMain} CradMenu={cradMenu} footer={footer}></Layouts>
			</LeftMenu>
		);
	}
	return <></>;
};

// 布局
const Layouts: FC<LayoutsProps> = ({ layoutStyle, tabsMain, CradMenu, footer }) => {
	return (
		<Layout>
			<Header>{CradMenu}</Header>

			<Content className="site-layout p-4" style={{ minHeight: 'calc(100vh - 64px)', ...layoutStyle.main }}>
				{tabsMain}
				<Outlet />
			</Content>
			{footer}
		</Layout>
	);
};

const AsyncLayout = () => useAysncComponent(Ilayout);

export default AsyncLayout;
