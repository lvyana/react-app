/**
 * @file 路由鉴权
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { GET_ROUTER } from '@/store/reducers/globalConfig';
import { Navigate, useLocation } from 'react-router-dom';
import type { Router } from '@/layout/menu/routerData';

const useRouterHooks = () => {
	const location = useLocation();
	const { pathname } = location;

	const routers = useSelector(GET_ROUTER);
	// 路由扁平化
	const flatRouters = useMemo(() => {
		const getFlat = (routers: Router[]): Router[] => {
			return routers.reduce((prev: Router[], cru) => {
				if (cru.children && cru.children.length > 0) {
					return [...prev, ...getFlat(cru.children)];
				}
				return [...prev, cru];
			}, []);
		};

		return getFlat(routers);
	}, [routers]);

	// 判断是否有菜单权限
	const isMenu = useMemo(() => {
		// return (
		// 	flatRouters.findIndex((item) => pathname.indexOf(item.path) > -1 || item.path.indexOf(pathname) > -1) > -1 ||
		// 	pathname === '/404' ||
		// 	pathname === '/'
		// );
		return true;
	}, [flatRouters, pathname]);

	// 获取选中的path
	const selectMenuPath = useMemo(() => flatRouters.find((item) => pathname.indexOf(item.path) > -1)?.path, [flatRouters, pathname]);

	return { isMenu, selectMenuPath, flatRouters };
};

export default useRouterHooks;
