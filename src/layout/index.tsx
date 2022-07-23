import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, BackTop } from 'antd';
import Menulist from '@/layout/menuList';
import Headerregion from '@/layout/header';
import TabsMain from './tabsMain';
import useIntro from '@/useHooks/useIntro';
import './index.less';
import { IresponsiveMin, useResponsiveMin } from '@/components/iResponsive';
const { Header, Content, Sider } = Layout;

const List = () => {
	const { isShow } = useResponsiveMin(600);

	useEffect(() => {
		if (isShow) {
			setCollapsedWidth(0);
		} else {
			setCollapsedWidth(200);
		}
	}, [isShow]);

	// 用户指导
	useIntro();
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
	return (
		<Layout className="my-Layout" style={{ minHeight: '100vh' }}>
			<IresponsiveMin MinWidth={600}>
				<Sider className="layout-sider" collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ transition: 'all 0.2s' }}>
					<div className="logo" />
					<Menulist />
				</Sider>
			</IresponsiveMin>

			<Layout className="site-layout" style={{ position: 'relative', marginLeft: collapsedWidth, transition: 'all 0.2s' }}>
				<div style={{ position: 'fixed', zIndex: 1, width: `calc(100vw - ${collapsedWidth}px)`, backgroundColor: '#f0f2f5' }}>
					<Header className="site-layout-background" style={{ padding: 0 }}>
						<Headerregion />
					</Header>
					<TabsMain></TabsMain>
				</div>
				<Content className="site-layout-background content-All">
					<div className="content-Bot">
						<Outlet />
					</div>
				</Content>
			</Layout>
			<BackTop visibilityHeight={200} />
		</Layout>
	);
};
export default List;
