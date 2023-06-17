/**
 * @file 实现左侧菜单
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useEffect, useMemo, ReactPortal } from 'react';
import { MenuProps, Menu as AntdMenu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import useThemeHooks from '@/config/antd/theme/useThemeHooks';
import IconFont from '@/utils/iconfont';
import { useAppSelector } from '@/store';
import { GET_ROUTER } from '@/store/reducers/globalConfig';
import useRouterHooks from '@/router/useHooks';
import { Router } from './routerData';
import Collapsed, { useCollapsed } from './components/Collapsed';
import { createPortal } from 'react-dom';

type MenuItem = Required<MenuProps>['items'][number];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const LeftMenu = () => {
	const { collapsedPortal, collapsed } = useCollapsed();

	const location = useLocation();
	const { pathname } = location;

	const { token } = useThemeHooks();

	const { selectMenuPath } = useRouterHooks();

	useEffect(() => {
		onOpenChange(getSelectUrlArr(pathname));
	}, [pathname]);

	// 当前展开的 SubMenu 菜单项 key 数组
	const [openKeys, setOpenKeys] = useState<Array<string>>([]);

	// SubMenu 展开/关闭的回调
	const onOpenChange = (keys: string[]) => {
		setOpenKeys(keys);
	};

	/**
	 * @method 处理路由
	 * @param url 当前路径 /react/hooks/xxx
	 * @returns ['/react','/react/hooks']
	 */
	const getSelectUrlArr = (url: string) => {
		return url.split('/')?.reduce<string[]>((prevState, currentState, index, arr) => {
			// 判空
			if (!currentState) return prevState;
			// 删除最后一个
			if (arr.length - 1 === index) return prevState;

			let newCurrent = '';

			if (prevState.length === 0) {
				newCurrent = '/' + currentState;
			} else {
				// ['/react', '/react/hooks'] + 'xxxx'
				newCurrent = [prevState[prevState.length - 1], currentState].join('/');
			}

			return [...prevState, newCurrent];
		}, []);
	};

	const menuList = useAppSelector(GET_ROUTER);

	const menu = useMemo(() => getMenu(menuList), [menuList]);

	return (
		<>
			{collapsedPortal}
			<Sider
				zeroWidthTriggerStyle={{ backgroundColor: token.colorBgBase }}
				collapsible
				collapsed={collapsed}
				trigger={null}
				style={{
					overflow: 'auto',
					height: 'calc(100vh - 64px)',
					position: 'fixed',
					left: 0,
					top: 64,
					bottom: 0,
					backgroundColor: token.colorBgBase
				}}>
				<AntdMenu
					theme="light"
					defaultOpenKeys={getSelectUrlArr(pathname)}
					defaultSelectedKeys={[selectMenuPath || pathname]}
					openKeys={openKeys}
					onOpenChange={onOpenChange}
					selectedKeys={[selectMenuPath || pathname]}
					mode="inline"
					items={menu}></AntdMenu>
			</Sider>
		</>
	);
};

export default LeftMenu;

/**
 * @method 调整menu数据
 * @param label 名称
 * @param key 唯一标志
 * @param icon 图标
 * @param children 子菜单的菜单项
 * @param type
 * @returns menu数据
 */
const getItem = (label: React.ReactNode, key: React.Key, icon?: string, children?: MenuItem[], type?: 'group'): MenuItem => {
	return {
		key,
		icon: icon && <IconFont type={icon} />,
		children,
		label,
		type
	} as MenuItem;
};

/**
 * @method 获取菜单数据结构
 * @param menu 路由数据
 * @returns menu数据
 */
const getMenu = (menuArr: Router[]): MenuItem[] => {
	return menuArr.reduce((acc: MenuItem[], item) => {
		if (item.show === false) return [...acc];

		if (item.children && item.children.length > 0) {
			let newItem = { ...getItem(item.title, item.path, item.icon), children: getMenu(item.children) } as MenuItem;
			return [...acc, newItem];
		} else {
			let newItem = getItem(<Link to={item.path}> {item.title}</Link>, item.path, item.icon);
			return [...acc, newItem];
		}
	}, []);
};
