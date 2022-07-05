import React, { useState, useEffect, memo } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import IconFont from '@/utils/iconfont';

const { SubMenu } = Menu;

type MenuItem = Required<MenuProps>['items'][number];

export interface router {
	title: string;
	path: string;
	key?: string;
	icon?: string;
	show?: boolean;
	children?: router[];
}
export const excludeMenu = ['role/allocation'];
export const menuList: router[] = [
	{
		title: 'expenses',
		path: '/expenses',
		key: '1',
		icon: 'icon-tiaoxingtu-duidie'
	},
	{
		title: '动态表单',
		path: '/dynamicform',
		key: '2',
		icon: 'icon-bingtu-huanxing'
	},
	{
		title: 'use',
		path: '/use',
		key: '3',
		icon: 'icon-bingtu-huanxing',
		children: [
			{
				title: 'MyUseState',
				path: '/use/MyUseState',
				key: '19',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseEffect',
				path: '/use/MyUseEffect',
				key: '20',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseReducer',
				path: '/use/MyUseReducer',
				key: '21',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseContext',
				path: '/use/MyUseContext',
				key: '22',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseMemo',
				path: '/use/MyUseMemo',
				key: '23',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseCallback',
				path: '/use/MyUseCallback',
				key: '23',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseRef',
				path: '/use/MyUseRef',
				key: '24',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseRouter',
				path: '/use/MyUseRouter',
				key: '25',
				icon: 'icon-bingtu-huanxing'
			}
		]
	},
	{
		title: '富文本',
		path: '/richtextedit',
		key: '4',
		icon: 'icon-chuangyepeixunxiangmu'
	},
	{
		title: 'pdf',
		path: '/pdf',
		key: '4=5',
		icon: 'icon-chuangyepeixunxiangmu'
	},
	// 不显示在菜单中中
	{
		title: '个人中心',
		path: '/mycenter',
		key: '6',
		icon: 'icon-bingtu-huanxing',
		show: false
	}
];
const Menulist = () => {
	const location = useLocation();
	useEffect(() => {
		onOpenChange([openpent(location.pathname)]);
	}, [location.pathname]);
	const [openKeys, setopenKeys] = useState<Array<string>>([]);
	const onOpenChange = (key: string[]) => {
		setopenKeys(key);
	};

	const openpent = (data: string) => {
		const a = data.split('/');
		a.splice(a.length - 1, 1);
		return a.join('/');
	};

	return (
		<Menu
			theme="light"
			defaultOpenKeys={[openpent(location.pathname)]}
			defaultSelectedKeys={[location.pathname]}
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			selectedKeys={[location.pathname]}
			mode="inline"
			items={getMenu(menuList)}></Menu>
	);
};
export default memo(Menulist);

const getItem = (label: React.ReactNode, key: React.Key, icon?: string, children?: MenuItem[], type?: 'group'): MenuItem => {
	return {
		key,
		icon: icon && <IconFont type={icon} />,
		children,
		label,
		type
	} as MenuItem;
};

// 获取菜单数据结构
const getMenu = (menuArr: router[]): MenuItem[] => {
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
