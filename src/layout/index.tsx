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
import { getIsItour, setIsItour } from '@/utils/storage';
import './index.scss';

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

	// 用户指导
	useEffect(() => {
		if (getIsItour() === '0' || !getIsItour()) {
			setOpenItour(true);
		}
	}, []);

	const [openItour, setOpenItour] = useState(false);

	const onCloseItour = () => {
		setOpenItour(false);
		setIsItour('1');
	};

	const LayoutLogo: React.CSSProperties = {
		position: 'absolute',
		top: 0,
		zIndex: 1,
		width: '100%',
		height: '64px',
		backgroundColor: `${token.colorBgBase}`,
		backgroundImage: ` url(${menuLogo})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		// background: `${token.colorBgBase} url(${menuLogo}) no-repeat center`,
		backgroundSize: 'contain',
		boxShadow: '0 3px 6px 0 rgb(195, 195, 195)'
	};

	const layoutContent: React.CSSProperties = {
		position: 'relative',
		padding: '8px',
		marginTop: '105px',
		overflowX: 'auto'
		// width: `calc(100% - ${collapsedWidth})`
	};

	return (
		<Layout className="my-layout" style={{ minHeight: '100vh' }}>
			<IresponsiveMin MinWidth={SIDER_MIN_WIDTH}>
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
				<div className="layout-transition" style={{ position: 'fixed', zIndex: 2, width: `calc(100% - ${collapsedWidth}px)` }}>
					<Header className="" style={{ padding: 0, backgroundColor: token.colorBgBase }}>
						<Headerregion />
					</Header>
					<TabsMain />
				</div>
				<Content style={layoutContent}>
					<Outlet />
				</Content>
			</Layout>
			<FloatButton.BackTop visibilityHeight={600} />
			<Itour open={openItour} onClose={onCloseItour}></Itour>
		</Layout>
	);
};

const AsyncLayout = () => useAysncComponent(Layouts);

export default AsyncLayout;
