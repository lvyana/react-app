/**
 * @file 按钮权限
 * @author ly
 * @createDate 2023年5月15日
 */
import React, { ReactElement } from 'react';
import useHasPermiss from '@/useHooks/usePermissions';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const authButtonPermissionHoc = (Component: ReactElement, permission?: string) => {
	const Authpermission = () => {
		const { hasPermiss } = useHasPermiss();
		if (hasPermiss(permission)) {
			return <>{Component}</>;
		}
		return null;
	};
	return <Authpermission></Authpermission>;
};

export default authButtonPermissionHoc;
