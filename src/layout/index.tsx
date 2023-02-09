/**
 * @file 实现Layout
 * @author ly
 * @createDate 日期：2020年4月27日
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

	return (
		<Layout className="My-Layout" style={{ minHeight: '100vh' }}>
			<IresponsiveMin MinWidth={600}>
				<Sider
					className="Layout-Transition"
					zeroWidthTriggerStyle={{ backgroundColor: token.colorBgBase }}
					style={{ backgroundColor: token.colorBgBase }}
					collapsible
					collapsed={collapsed}
					onCollapse={onCollapse}>
					<div className="Layout-logo" />
					<Menulist />
				</Sider>
			</IresponsiveMin>

			<Layout className="Layout-Transition" style={{ position: 'relative', marginLeft: collapsedWidth }}>
				<div className="Layout-Transition" style={{ position: 'fixed', zIndex: 1, width: `calc(100% - ${collapsedWidth}px)` }}>
					<Header className="" style={{ padding: 0, backgroundColor: token.colorBgBase }}>
						<Headerregion />
					</Header>
					<TabsMain />
				</div>
				<Content className="Layout-Content">
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
