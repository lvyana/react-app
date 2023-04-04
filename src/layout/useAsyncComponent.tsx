/**
 * @file layout鉴权(异步)
 * @author ly
 * @createDate 2022年10月10日
 */
import React, { useRef, Suspense, lazy, FC } from 'react';
import { useAppDispatch } from '@/store';
import { SET_ROUTER } from '@/store/reducers/globalConfig';
import menuList, { Router } from '@/layout/menuList/routerData';
import Iloading from '@/pluginComponents/iLoading';

// 异步路由
const AysncComponentHoc = (Component: React.FC, api: () => Promise<Router[]>, setRedux: (data: Router[]) => void) => {
	const AysncComponentPromise = (): Promise<{ default: FC }> =>
		new Promise(async (resolve, reject) => {
			try {
				const data = await api();
				setRedux(data);

				resolve({
					default: () => <Component></Component>
				});
			} catch (error) {
				reject({
					default: () => <div>路由没啦....</div>
				});
			}
		});

	return lazy(AysncComponentPromise);
};

const useAysncComponent = (LayoutComponent: React.FC) => {
	const dispatch = useAppDispatch();
	// 获取路由权限
	const router = () => {
		// 模拟接口
		return new Promise<Router[]>((resolve, reject) => {
			setTimeout(() => {
				resolve(menuList);
			}, 100);
		});
	};

	// 把路由存入redux
	const setRedux = (data: Router[]) => {
		dispatch(SET_ROUTER(data));
	};

	const LazyComponent = AysncComponentHoc(LayoutComponent, router, setRedux);

	return (
		<Suspense fallback={<Iloading></Iloading>}>
			<LazyComponent></LazyComponent>
		</Suspense>
	);
};

export default useAysncComponent;
