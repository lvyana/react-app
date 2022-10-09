/**
 *	@name 实现面包屑
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import { Router, EXCLUDE_MENU } from '../menuList/index';
import { useAppSelector } from '@/store/hooks';
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
				routerArr[0] = { path: '/', title: '系统', key: '/', children: menuList };
			} else {
				let is = routerArr[i - 1].children?.find((val) => {
					return val.path.indexOf(item) !== -1;
				});
				if (is) routerArr[i] = is;
			}
		});

		SetcurrentRouter(routerArr);
	}, [location.pathname]);
	return (
		<div style={{ paddingLeft: '27px' }}>
			<Breadcrumb>
				{currentRouter.map((item, i) => {
					return item.children ? (
						<Breadcrumb.Item key={item.path} overlay={CrumbMenus(item.children, currentRouter[i + 1]?.path)}>
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

const CrumbMenus = (menu: Router[], current: string) => {
	return (
		<Menu
			selectedKeys={[current]}
			items={menu.reduce((acc: MenuItem[], item) => {
				if (item.show === false) {
					return acc;
				} else {
					let newItem = getItem(<Link to={item.path}> {item.title}</Link>, item.path);
					return [...acc, newItem];
				}
			}, [])}></Menu>
	);
};

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
