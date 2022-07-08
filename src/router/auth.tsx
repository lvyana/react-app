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
