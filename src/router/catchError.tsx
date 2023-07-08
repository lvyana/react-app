import { RouteObject } from 'react-router-dom';
import { Routes } from './index';
import { ErrorView } from '@/hoc/errorBoundaryHoc';

/**
 * @method 添加错误组件
 * @param router 路由数据
 * @returns 包裹Auth组件后路由
 */
export const setRouterError = (router: Routes[]): Routes[] => {
	return router.reduce<RouteObject[]>((acc, route) => {
		let newRouter: Routes = route;

		// 没有权限 且没有element 不做权限
		if (!newRouter.errorElement) {
			newRouter = {
				...route,
				errorElement: <ErrorView></ErrorView>
			};
		}

		if (newRouter.children && newRouter.children.length > 0) {
			return [...acc, { ...newRouter, children: setRouterError(newRouter.children) }];
		}

		return [...acc, newRouter];
	}, []);
};

export default setRouterError;
