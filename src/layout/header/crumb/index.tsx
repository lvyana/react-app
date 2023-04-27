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
		let routerArr: any[] = [];
		location.pathname.split('/').map((item, i) => {
			let is = menuList?.find((val) => {
				console.log(val, item);

				return val.path.indexOf(item) !== -1;
			});

			if (is) routerArr[i] = is;
		});

		SetcurrentRouter(routerArr);
	}, [location.pathname]);

	return <Breadcrumb items={currentRouter}></Breadcrumb>;
};

export default Crumb;
