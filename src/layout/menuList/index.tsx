import React, { useState, useEffect, memo } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import IconFont from '@/utils/iconfont';

const { SubMenu } = Menu;
export interface router {
	title: string;
	path: string;
	key?: string;
	icon?: string;
	menutype?: number;
	show?: boolean;
	children?: router[];
}
export const excludeMenu = ['role/allocation'];
export const menuList: router[] = [
	{
		title: 'expenses',
		path: '/expenses',
		key: '1',
		icon: 'icon-tiaoxingtu-duidie',
		menutype: 1
	},
	{
		title: '动态表单',
		path: '/dynamicform',
		key: '2',
		icon: 'icon-bingtu-huanxing',
		menutype: 1
	},
	{
		title: '面试筛选',
		path: '/interviewer',
		key: '3',
		icon: 'icon-bingtu-huanxing',
		menutype: 1
	},
	{
		title: '配置面试官',
		path: '/configureInterviewers',
		key: '4',
		icon: 'icon-bingtu-huanxing',
		menutype: 1
	},
	{
		title: '简历筛选',
		path: '/screenResumes',
		key: '5',
		icon: 'icon-bingtu-huanxing',
		menutype: 1
	},
	{
		title: '富文本',
		path: '/richtextedit',
		key: '9',
		icon: 'icon-chuangyepeixunxiangmu',
		menutype: 1
	},
	// 不显示在菜单中中
	{
		title: '个人中心',
		path: '/mycenter',
		key: '6',
		icon: 'icon-bingtu-huanxing',
		menutype: 1,
		show: false
	}
];
const Menulist = () => {
	const location = useLocation();
	useEffect(() => {
		onOpenChange([openpent(location.pathname)]);
	}, [location.pathname]);
	let [openKeys, setopenKeys] = useState<Array<string>>([]);
	const onOpenChange = (key: string[]) => {
		setopenKeys(key);
	};
	const parentMenu = (item: router) => {
		return item.show === false ? (
			''
		) : (
			<Menu.Item key={item.path} icon={item.icon && <IconFont type={item.icon} />}>
				<Link to={item.path}>{item.title}</Link>
			</Menu.Item>
		);
	};
	const childrenMenu = (item: router) => {
		return (
			<SubMenu key={item.path} icon={item.icon && <IconFont type={item.icon} />} title={item.title}>
				{item.children &&
					item.children.map((val) => {
						return val.children && val.children.length > 0 ? childrenMenu(val) : parentMenu(val);
					})}
			</SubMenu>
		);
	};

	const openpent = (data: string) => {
		let a = data.split('/');
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
			mode="inline">
			{menuList.map((item: router) => {
				return item.children && item.children.length > 0 ? childrenMenu(item) : parentMenu(item);
			})}
		</Menu>
	);
};
export default memo(Menulist);
