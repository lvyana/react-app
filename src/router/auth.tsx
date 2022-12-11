/**
 *	@name 实现权限
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { ReactNode, FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from '@/utils/storage';
import useRouterHooks from './useHooks';
export interface AuthProps {
	element: ReactNode;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Auth: FC<AuthProps> = ({ element }) => {
	const location = useLocation();

	const { isMenu } = useRouterHooks();

	// 获取token
	const isToken = () => {
		return getToken();
	};

	// token权限
	if (isToken()) {
		// 鉴定是否有菜单权限
		if (isMenu) {
			return <>{element}</>;
		} else {
			return <Navigate to="/404" />;
		}
	} else {
		return <Navigate to="/login" />;
	}
};

export default Auth;
