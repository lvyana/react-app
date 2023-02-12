/**
 * @file 实现Layout
 * @author ly
 *  @createDate 日期：2020年4月27日
 */
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, FloatButton } from 'antd';
import Menulist from '@/layout/menuList';
import Headerregion from '@/layout/header';
import TabsMain from './tabsMain';
import Itour from '@/antdComponents/iTour';
import { IresponsiveMin, useResponsiveMin } from '@/pluginComponents/iResponsive';
import useApi from '@/useHooks/useApi';
import useAysncComponent from './useAsyncComponent';
import useThemeHooks from '@/config/theme/useThemeHooks';
import menuLogo from '@/assets/images/menu.png';
import './index.scss';

const { Header, Content, Sider } = Layout;

const Layouts = () => {
	const [token] = useThemeHooks();

	useApi();

	const { isShow } = useResponsiveMin(600);

	useEffect(() => {
		if (isShow) {
			setCollapsedWidth(0);
		} else {
			setCollapsedWidth(200);
		}
	}, [isShow]);

	// 菜单收齐打开
	const [collapsed, setcollapsed] = useState(false);
	const [collapsedWidth, setCollapsedWidth] = useState(() => (isShow ? 0 : 200));

	const onCollapse = (collapsed: boolean | ((prevState: boolean) => boolean)) => {
		setcollapsed(collapsed);
	};

	useEffect(() => {
		if (isShow) return;
		if (collapsed) {
			setCollapsedWidth(80);
		} else {
			setCollapsedWidth(200);
		}
	}, [collapsed]);

	// 用户指导
	useEffect(() => {
		setOpenItour(true);
	}, []);

	const [openItour, setOpenItour] = useState(false);

	const onCloseItour = () => {
		setOpenItour(false);
	};

	const LayoutLogo: React.CSSProperties = {
		position: 'absolute',
		top: 0,
		zIndex: 1,
		width: '100%',
		height: '64px',
		backgroundColor: `${token.colorBgBase}`,
		background: `url(${menuLogo}) no-repeat center`,
		backgroundSize: 'contain',
		boxShadow: '0 3px 6px 0 rgb(195, 195, 195)'
	};

	return (
		<Layout className="my-layout" style={{ minHeight: '100vh' }}>
			<IresponsiveMin MinWidth={600}>
				<Sider
					className="layout-transition"
					zeroWidthTriggerStyle={{ backgroundColor: token.colorBgBase }}
					style={{ backgroundColor: token.colorBgBase }}
					collapsible
					collapsed={collapsed}
					onCollapse={onCollapse}>
					<div style={LayoutLogo} />
					<Menulist />
				</Sider>
			</IresponsiveMin>

			<Layout className="layout-transition" style={{ position: 'relative', marginLeft: collapsedWidth }}>
				<div className="layout-transition" style={{ position: 'fixed', zIndex: 1, width: `calc(100% - ${collapsedWidth}px)` }}>
					<Header className="" style={{ padding: 0, backgroundColor: token.colorBgBase }}>
						<Headerregion />
					</Header>
					<TabsMain />
				</div>
				<Content className="layout-content">
					<Outlet />
				</Content>
			</Layout>
			<FloatButton.BackTop visibilityHeight={600} />
			<Itour open={openItour} onClose={onCloseItour}></Itour>
		</Layout>
	);
};

const AsyncLayout = () => {
	// 异步组件会导致useEffect先执行 并且拿不到dom
	return useAysncComponent(Layouts);
};

export default AsyncLayout;
