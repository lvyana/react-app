/**
 * @file 排版配置处理后的页面
 * @author ly
 * @createDate 2023年6月13日
 */
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Layout, { Content, Footer } from 'antd/es/layout/layout';
import Header from '@/layout/header';
import Logo from './header/logo';
import CradMenu from './menu/CradMenu';
import LeftMenu from './menu/LeftMenu';
import useLayout from './useHooks/useLayout';
import { StyleLayoutConfig } from './useHooks/styleLayoutConfig';
import TabsMain from './tabsMain';
import { LayoutMenuType, LayoutType } from '@/store/reducers/layout';

/**
 * @param layoutStyle 布局所有需要的样式
 * @param tabsMain 顶部导航栏
 * @param CradMenu 卡片菜单
 * @param leftMenu 左侧菜单
 * @param footer 底部
 */
type LayoutsProps = {
	layoutStyle: StyleLayoutConfig;
	tabsMain: React.ReactNode;
	CradMenu: React.ReactNode;
	leftMenu: React.ReactNode;
	footer: React.ReactNode;
};

type TabsMainComProps = {
	tabsMainLayout: LayoutType;
};

type CradMenuComProps = {
	menuLayout: LayoutMenuType;
};

type FooterComProps = {
	footerLayout: LayoutType;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const LayoutStyle = () => {
	const { layoutStyle, tabsMainLayout, menuLayout, footerLayout } = useLayout();

	return (
		<LayoutCom
			layoutStyle={layoutStyle}
			tabsMain={<TabsMainCom tabsMainLayout={tabsMainLayout}></TabsMainCom>}
			CradMenu={<CradMenuCom menuLayout={menuLayout}></CradMenuCom>}
			leftMenu={<LeftMenuCom menuLayout={menuLayout}></LeftMenuCom>}
			footer={<FooterCom footerLayout={footerLayout}></FooterCom>}></LayoutCom>
	);
};

// 布局
const LayoutCom: FC<LayoutsProps> = ({ layoutStyle, leftMenu, tabsMain, CradMenu, footer }) => {
	return (
		<>
			{/* 左侧卡片 */}
			{leftMenu}
			<Layout>
				{/* 顶部栏 */}
				<Header>{CradMenu}</Header>

				{/* 内容 */}
				<Content
					className="site-layout p-4"
					style={{ minHeight: `calc(100vh - 64px - ${layoutStyle.footerStyle.main.minHeight})`, ...layoutStyle.menuStyle.main }}>
					{/* 导航栏 */}
					{tabsMain}
					{/* 内容 */}
					<Outlet />
				</Content>

				{/* 底部 */}
				{footer}
			</Layout>
		</>
	);
};

// 标签页是否显示
const TabsMainCom: FC<TabsMainComProps> = ({ tabsMainLayout }) => {
	if (tabsMainLayout === 1) {
		return <></>;
	} else {
		return <TabsMain></TabsMain>;
	}
};

// logo是否显示卡片菜单
const CradMenuCom: FC<CradMenuComProps> = ({ menuLayout }) => {
	if (menuLayout === 1) {
		return (
			<CradMenu>
				<Logo></Logo>
			</CradMenu>
		);
	} else {
		return <Logo></Logo>;
	}
};

// 左侧菜单是否显示
const LeftMenuCom: FC<CradMenuComProps> = ({ menuLayout }) => {
	if (menuLayout === 1) {
		return <></>;
	} else {
		return <LeftMenu></LeftMenu>;
	}
};

// 底部表现是否显示
const FooterCom: FC<FooterComProps> = ({ footerLayout }) => {
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
};

export default LayoutStyle;
