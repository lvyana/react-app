/**
 * @file 侧边栏
 * @author ly
 * @createDate 2023年5月16日
 */
import React, { Children, FC, useEffect, useRef } from 'react';
import useThemeHooks from '@/config/theme/useThemeHooks';
import Sider, { CollapseType } from 'antd/es/layout/Sider';
import menuLogo from '@/assets/images/menu.png';

/**
 * @param children menu菜单
 * @param collapsed 当前收起状态
 * @param onCollapse 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发
 */
type SiderBarProps = {
	children: React.ReactNode;
	collapsed: boolean;
	onCollapse: (collapsed: boolean, type: CollapseType) => void;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const SiderBar: FC<SiderBarProps> = ({ children, collapsed, onCollapse }) => {
	const { token } = useThemeHooks();

	const LayoutLogo: React.CSSProperties = {
		position: 'absolute',
		top: 0,
		zIndex: 1,
		width: '100%',
		height: '64px',
		backgroundColor: `${token.colorBgBase}`,
		backgroundImage: `url(${menuLogo})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		// background: `${token.colorBgBase} url(${menuLogo}) no-repeat center`,
		backgroundSize: 'contain',
		boxShadow: '0 3px 6px 0 rgb(195, 195, 195)'
	};

	return (
		<div>
			<Sider
				className="layout-transition"
				zeroWidthTriggerStyle={{ backgroundColor: token.colorBgBase }}
				style={{ backgroundColor: token.colorBgBase }}
				collapsible
				collapsed={collapsed}
				onCollapse={onCollapse}>
				<div style={LayoutLogo} />
				{children}
			</Sider>
		</div>
	);
};

export default SiderBar;
