/**
 * @file 面包屑
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
import type { MenuProps } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import { Router, EXCLUDE_MENU } from '../../menuList/index';
import { useAppSelector } from '@/store';
import { GET_ROUTER } from '@/store/reducers/globalConfig';

type MenuItem = Required<MenuProps>['items'][number];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Crumb = () => {
	const location = useLocation();

	const menuList = useAppSelector(GET_ROUTER);

	const [currentRouter, SetcurrentRouter] = useState<Router[]>([]);

	useEffect(() => {
		if (location.pathname.indexOf(EXCLUDE_MENU[0]) !== -1) return;
		let routerArr: Router[] = [];
		location.pathname.split('/').map((item, i) => {
			if (i === 0) {
				routerArr[0] = { path: '/', title: '系统', children: menuList };
			} else {
				let is = routerArr[i - 1]?.children?.find((val) => {
					return val.path.indexOf(item) !== -1;
				});
				if (is) routerArr[i] = is;
			}
		});

		SetcurrentRouter(routerArr);
	}, [location.pathname]);

	return (
		<div style={{ paddingLeft: '27px' }}>
			<Breadcrumb style={{}}>
				{currentRouter.map((item, i) => {
					return item.children ? (
						<Breadcrumb.Item key={item.path} menu={{ items: CrumbMenus(item.children), selectedKeys: [currentRouter[i + 1]?.path] }}>
							<a>{item.title}</a>
						</Breadcrumb.Item>
					) : (
						<Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
					);
				})}
			</Breadcrumb>
		</div>
	);
};

/**
 * @method 路由数据->menu数据
 * @param menu 路由数据
 * @returns menu数据
 */
const CrumbMenus = (menu: Router[]) => {
	return menu.reduce((acc: MenuItem[], item) => {
		if (item.show === false) {
			return acc;
		} else {
			let newItem = getItem(<Link to={item.path}> {item.title}</Link>, item.path);
			return [...acc, newItem];
		}
	}, []);
};

/**
 * @method 调整menu数据
 * @param label 名称
 * @param key 唯一标志
 * @param icon 图标
 * @param children 子菜单的菜单项
 * @param type
 * @returns menu数据
 */
const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem => {
	return {
		key,
		icon,
		children,
		label,
		type
	} as MenuItem;
};

export default Crumb;
