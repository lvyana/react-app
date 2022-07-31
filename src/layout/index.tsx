/**
 *	@name 实现Layout
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, BackTop } from 'antd';
import Menulist from '@/layout/menuList';
import Headerregion from '@/layout/header';
import TabsMain from './tabsMain';
import useIntro from '@/useHooks/useIntro';
import { IresponsiveMin, useResponsiveMin } from '@/components/iResponsive';
import useApi from '@/useHooks/useApi';
import './index.less';

const { Header, Content, Sider } = Layout;

const List = () => {
	useApi();

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
				<Sider className="layout-sider layout-transition" collapsible collapsed={collapsed} onCollapse={onCollapse}>
					<div className="logo" />
					<Menulist />
				</Sider>
			</IresponsiveMin>

			<Layout className="site-layout layout-transition" style={{ position: 'relative', marginLeft: collapsedWidth }}>
				<div
					className="layout-transition"
					style={{ position: 'fixed', zIndex: 1, width: `calc(100% - ${collapsedWidth}px)`, backgroundColor: '#f0f2f5' }}>
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
