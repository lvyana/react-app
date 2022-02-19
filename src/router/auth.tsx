import React, { ReactNode } from 'react';
import { getToken } from '@/uilts/storage';
import { Navigate } from 'react-router-dom';
export interface WrapperRouteProps {
	/** document title locale id */
	title: string;
	/** authorization？ */
	auth?: boolean;
	element: ReactNode;
}

const Auth = ({ element, title, auth, ...props }: WrapperRouteProps) => {
	return auth ? <>{element}</> : getToken() ? <>{element}</> : <Navigate to="/login" />;
};

export default Auth;
