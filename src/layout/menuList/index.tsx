/**
 *	@name 实现左侧菜单
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { useState, useEffect, memo } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import IconFont from '@/utils/iconfont';

type MenuItem = Required<MenuProps>['items'][number];

export interface Router {
	title: string;
	path: string;
	key?: string;
	icon?: string;
	show?: boolean;
	children?: Router[];
}
export const EXCLUDE_MENU = ['role/allocation'];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

export const menuList: Router[] = [
	{
		title: 'antd',
		path: '/antd',
		key: '3',
		icon: 'icon-bingtu-huanxing',
		children: [
			{
				title: 'expenses',
				path: '/antd/expenses',
				key: '1',
				icon: 'icon-tiaoxingtu-duidie'
			},
			{
				title: '动态表单',
				path: '/antd/dynamicform',
				key: '2',
				icon: 'icon-bingtu-huanxing'
			}
		]
	},

	{
		title: 'react',
		path: '/react',
		key: '3',
		icon: 'icon-bingtu-huanxing',
		children: [
			{
				title: 'MyUseState',
				path: '/react/MyUseState',
				key: '19',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseEffect',
				path: '/react/MyUseEffect',
				key: '20',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseLayoutEffect',
				path: '/react/MyUseLayoutEffect',
				key: '222',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseReducer',
				path: '/react/MyUseReducer',
				key: '21',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseContext',
				path: '/react/MyUseContext',
				key: '22',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseMemo',
				path: '/react/MyUseMemo',
				key: '23',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseCallback',
				path: '/react/MyUseCallback',
				key: '23',
				icon: 'icon-bingtu-huanxing'
			},
			{
				title: 'MyUseRef',
				path: '/react/MyUseRef',
				key: '24',
				icon: 'icon-bingtu-huanxing'
			},

			{
				title: 'Rtk',
				path: '/react/Rtk',
				key: '7',
				icon: 'icon-chuangyepeixunxiangmu'
			}
		]
	},
	{
		title: 'Router',
		path: '/router',
		key: '99',
		icon: 'icon-chuangyepeixunxiangmu',
		children: [
			{
				title: 'RouterDemo',
				path: '/router/RouterDemo',
				key: '4',
				icon: 'icon-chuangyepeixunxiangmu'
			},
			{
				title: 'MyUseRouter',
				path: '/router/MyUseRouter',
				key: '25',
				icon: 'icon-bingtu-huanxing'
			}
		]
	},
	{
		title: 'funCom',
		path: '/funCom',
		key: '3',
		icon: 'icon-bingtu-huanxing',
		children: [
			{
				title: '富文本',
				path: '/funCom/richtextedit',
				key: '4',
				icon: 'icon-chuangyepeixunxiangmu'
			},
			{
				title: 'pdf',
				path: '/funCom/pdf',
				key: '5',
				icon: 'icon-chuangyepeixunxiangmu'
			},

			{
				title: 'Player',
				path: '/funCom/Player',
				key: '8',
				icon: 'icon-chuangyepeixunxiangmu'
			},
			{
				title: 'gridLayout',
				path: '/funCom/DemoGridLayout',
				key: '8',
				icon: 'icon-chuangyepeixunxiangmu'
			},
			{
				title: 'Responsive',
				path: '/funCom/Responsive',
				key: '8',
				icon: 'icon-chuangyepeixunxiangmu'
			}
		]
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
