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
import { IresponsiveMin, useResponsiveMin } from '@/pluginComponents/iResponsive';
import useThemeHooks from '@/config/theme/useThemeHooks';
import useApi from '@/useHooks/useApi';
import TabsMain from './tabsMain';
import Tour from './tour';
import useAysncComponent from './useAsyncComponent';
import SiderBar from './siderBar';
import style from './index.module.scss';

const { Header, Content, Sider } = Layout;
// width小于650 左侧隐藏
const SIDER_MIN_WIDTH = 650;

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Layouts = () => {
	const { token } = useThemeHooks();

	// 初始化api数据
	useApi();

	const { isShow } = useResponsiveMin(SIDER_MIN_WIDTH);

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
		if (isShow) {
			setCollapsedWidth(0);
		} else {
			if (collapsed) {
				setCollapsedWidth(80);
			} else {
				setCollapsedWidth(200);
			}
		}
	}, [isShow, collapsed]);

	return (
		<Layout className={style['my-layout']} style={{ minHeight: '100vh' }}>
			<IresponsiveMin MinWidth={SIDER_MIN_WIDTH}>
				<SiderBar collapsed={collapsed} onCollapse={onCollapse}>
					<Menulist />
				</SiderBar>
			</IresponsiveMin>

			<Layout className={style['layout-transition']} style={{ position: 'relative', marginLeft: collapsedWidth }}>
				<div className={style['layout-transition']} style={{ position: 'fixed', zIndex: 9999, width: `calc(100% - ${collapsedWidth}px)` }}>
					<Header className="" style={{ padding: 0, backgroundColor: token.colorBgBase }}>
						<Headerregion />
					</Header>
					<TabsMain />
				</div>
				<Content className={style['layout-content']}>
					<Outlet />
				</Content>
			</Layout>
			<FloatButton.BackTop visibilityHeight={600} />
			<Tour></Tour>
		</Layout>
	);
};

const AsyncLayout = () => useAysncComponent(Layouts);

export default AsyncLayout;
