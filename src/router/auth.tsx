/**
 *	@name 实现权限
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { ReactNode, lazy, ComponentType, Suspense, FC, useRef } from 'react';

import { Navigate } from 'react-router-dom';
import { getToken } from '@/utils/storage';

export interface AuthProps {
	element: ReactNode;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Auth: FC<AuthProps> = ({ element }) => {
	// 获取token
	const isToken = () => {
		return getToken();
	};

	// token权限

	if (isToken()) {
		return <>{element}</>;
	} else {
		return <Navigate to="/login" />;
	}
};

export default Auth;
