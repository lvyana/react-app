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
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';

type MenuItem = Required<MenuProps>['items'][number];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Crumb = () => {
	const location = useLocation();

	const menuList = useAppSelector(GET_ROUTER);

	const [currentRouter, SetcurrentRouter] = useState<ItemType[]>([]);

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

		SetcurrentRouter(getCrumbList(routerArr));
	}, [location.pathname]);

	return <Breadcrumb items={currentRouter}></Breadcrumb>;
};

export default Crumb;

const getCrumbList = (routerArr: Router[]) => {
	return routerArr.map((item) => {
		if (item.children) {
			return {
				title: item.title,
				menu: {
					items: item.children?.map((r) => {
						return {
							key: r.path,
							label: <Link to={r.path}>{r.title}</Link>
						};
					})
				}
			};
		}
		return {
			key: item.path,
			title: item.title
		};
	});
};
