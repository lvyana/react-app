/**
 * @file 实现权限
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { ReactNode, FC } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { getToken } from '@/utils/storage';
import useRouterHooks from './useHooks';
import type { Routes } from './index';
export interface AuthProps {
	children: ReactNode;
}

type SetAuth<T> = (router: T) => RouteObject[];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Auth: FC<AuthProps> = ({ children }) => {
	const { isMenu } = useRouterHooks();

	// 获取token
	const isToken = () => {
		return getToken();
	};

	// token权限
	if (isToken()) {
		// 鉴定是否有菜单权限
		if (isMenu) {
			return <>{children}</>;
		} else {
			return <Navigate to="/404" />;
		}
	} else {
		return <Navigate to="/login" />;
	}
};

/**
 * @method 添加菜单权限
 * @param router 路由数据
 * @returns 包裹Auth组件后路由
 */
export const setRouterAuth: SetAuth<Routes[]> = (router) => {
	return router.reduce<RouteObject[]>((acc, route) => {
		if (route.children && route.children.length > 0) {
			return [...acc, { ...route, children: setRouterAuth(route.children) }];
		}

		if (route.auth === false) {
			return [...acc, route];
		}

		return [...acc, { ...route, element: <Auth>{route.element}</Auth> }];
	}, []);
};

export default Auth;
