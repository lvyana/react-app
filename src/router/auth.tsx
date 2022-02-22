import React, { ReactNode, useState } from 'react';
import { getToken } from '@/uilts/storage';
import { Navigate } from 'react-router-dom';

export interface WrapperRouteProps {
	/** document title locale id */
	title: string;
	/** authorization？ */
	auth?: boolean;
	element: ReactNode;
}

interface Window {
	__POWERED_BY_QIANKUN__?: boolean;
}

const Auth = ({ element, title, auth, ...props }: WrapperRouteProps) => {
	// 判断用那个token
	const isToken = () => {
		return getToken();
	};
	return auth ? <>{element}</> : isToken() ? <>{element}</> : <Navigate to="/login" />;
};

export default Auth;
