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

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const LayoutStyle = () => {
	const { layoutStyle } = useLayout();
	return (
		<LayoutCom
			layoutStyle={layoutStyle}
			tabsMain={<TabsMainCom></TabsMainCom>}
			CradMenu={<CradMenuCom></CradMenuCom>}
			leftMenu={<LeftMenuCom></LeftMenuCom>}
			footer={<FooterCom></FooterCom>}></LayoutCom>
	);
};

// 布局
const LayoutCom: FC<LayoutsProps> = ({ layoutStyle, leftMenu, tabsMain, CradMenu, footer }) => {
	return (
		<>
			{leftMenu}
			<Layout>
				<Header>{CradMenu}</Header>

				<div style={{ ...layoutStyle.menuStyle.main }}>
					<Content className="site-layout p-4" style={{ ...layoutStyle.footerStyle.main }}>
						{tabsMain}
						<Outlet />
					</Content>
					{footer}
				</div>
			</Layout>
		</>
	);
};

const TabsMainCom = () => {
	const { tabsMainLayout } = useLayout();
	if (tabsMainLayout === 1) {
		return <></>;
	} else {
		return <TabsMain></TabsMain>;
	}
};

const CradMenuCom = () => {
	const { menuLayout } = useLayout();
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

const LeftMenuCom = () => {
	const { menuLayout } = useLayout();
	if (menuLayout === 1) {
		return <></>;
	} else {
		return <LeftMenu></LeftMenu>;
	}
};

const FooterCom = () => {
	const { footerLayout } = useLayout();

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
