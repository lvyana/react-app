/**
 *	@name 实现权限
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { ReactNode, FC, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { GET_ROUTER } from '@/store/reducers/globalConfig';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from '@/utils/storage';
import { Router } from '@/layout/menuList';

export interface AuthProps {
	element: ReactNode;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Auth: FC<AuthProps> = ({ element }) => {
	const location = useLocation();
	const { pathname } = location;

	// 获取token
	const isToken = () => {
		return getToken();
	};

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

	// token权限
	if (isToken()) {
		// 鉴定是否有菜单权限
		if (flatRouters.findIndex((item) => item.path === pathname) > -1 || flatRouters.length === 0 || pathname === '/404') {
			return <>{element}</>;
		} else {
			return <Navigate to="/404" />;
		}
	} else {
		return <Navigate to="/login" />;
	}
};

export default Auth;
