import React, { ReactNode, useState } from 'react';
import { getToken } from '@/utils/storage';
import { Navigate } from 'react-router-dom';

export interface WrapperRouteProps {
	/** document title locale id */
	/** authorization？ */
	auth?: boolean;
	element: ReactNode;
}

interface Window {
	__POWERED_BY_QIANKUN__?: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Auth = ({ element, auth }: WrapperRouteProps) => {
	// 判断用那个token
	const isToken = () => {
		return getToken();
	};
	if (auth) {
		return <>{element}</>;
	}
	if (isToken()) {
		return <>{element}</>;
	} else {
		return <Navigate to="/login" />;
	}
};

export default Auth;
