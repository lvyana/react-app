/**
 * @file 实现左侧菜单
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useEffect, memo } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import IconFont from '@/utils/iconfont';
import { useAppSelector } from '@/store';
import { GET_ROUTER } from '@/store/reducers/globalConfig';
import useRouterHooks from '@/router/useHooks';

type MenuItem = Required<MenuProps>['items'][number];

/**
 * @param title 标题
 * @param path 路径
 * @param icon 图标
 * @param show 显示、隐藏
 * @param children 子级
 */
export interface Router {
	title: string;
	path: string;
	icon?: string;
	show?: boolean;
	children?: Router[];
}

export const EXCLUDE_MENU = ['role/allocation'];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Menulist = () => {
	const location = useLocation();
	const { pathname } = location;

	const { selectMenuPath } = useRouterHooks();

	useEffect(() => {
		onOpenChange(getSelectUrlArr(pathname));
	}, [pathname]);

	const [openKeys, setOpenKeys] = useState<Array<string>>([]);

	const onOpenChange = (keys: string[]) => {
		setOpenKeys(keys);
	};

	/**
	 * @method 处理路由
	 * @param url 当前路径 /react/hooks/xxx
	 * @returns ['/react','/react/hooks']
	 */
	const getSelectUrlArr = (url: string) => {
		console.log(
			url.split('/')?.reduce<string[]>((prevState, currentState, index, arr) => {
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
			}, [])
		);

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

	return (
		<Menu
			theme="light"
			defaultOpenKeys={getSelectUrlArr(pathname)}
			defaultSelectedKeys={[selectMenuPath || pathname]}
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			selectedKeys={[selectMenuPath || pathname]}
			mode="inline"
			items={getMenu(menuList)}></Menu>
	);
};
export default memo(Menulist);

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
