import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, BackTop } from 'antd';
import Menulist from '@/layout/menuList';
import Headerregion from '@/layout/header';
import TabsMain from './tabsMain';
import useIntro from '@/useHooks/useIntro';
import './index.scss';
const { Header, Content, Sider } = Layout;

const List = () => {
	// 用户指导
	useIntro();
	// 菜单收齐打开
	const [collapsed, setcollapsed] = useState(false);
	const [collapsedWidth, setCollapsedWidth] = useState(200);
	const onCollapse = (collapsed: boolean | ((prevState: boolean) => boolean)) => {
		setcollapsed(collapsed);
	};
	useEffect(() => {
		window.onresize = () => {
			if (window.innerWidth < 1000) {
				setcollapsed(true);
			} else {
				setcollapsed(false);
			}
		};
		if (window.innerWidth < 1000) {
			setcollapsed(true);
		} else {
			setcollapsed(false);
		}
	}, []);

	useEffect(() => {
		if (collapsed) {
			setCollapsedWidth(80);
		} else {
			setCollapsedWidth(200);
		}
	}, [collapsed]);
	return (
		<Layout className="myLayout" style={{ minHeight: '100vh' }}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={onCollapse}
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0
				}}>
				<div className="logo" />
				<Menulist />
			</Sider>
			<Layout className="site-layout" style={{ marginLeft: collapsedWidth, transition: 'all 0.2s' }}>
				<div style={{ position: 'fixed', zIndex: 1, width: `calc(100vw - ${collapsedWidth}px)`, backgroundColor: '#f0f2f5' }}>
					<Header className="site-layout-background" style={{ padding: 0 }}>
						<Headerregion />
					</Header>
					<TabsMain></TabsMain>
				</div>
				<Content className="site-layout-background contentAll">
					<div className="contentBot">
						<Outlet />
					</div>
				</Content>
			</Layout>
			<BackTop visibilityHeight={200} />
		</Layout>
	);
};
export default List;
