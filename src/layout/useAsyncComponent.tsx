/**
 * @name layout鉴权(异步)
 * @user ly
 * @date 2022年10月10日
 */
import React, { useRef, Suspense, lazy, ComponentType } from 'react';
import { useAppDispatch } from '@/store';
import { SET_ROUTER } from '@/store/reducers/globalConfig';
import menuList, { Router } from '@/layout/menuList/routerData';
import Iloading from '@/pluginComponents/iLoading';

// 异步路由
const AysncComponentHoc = (Component: React.FC, api: () => Promise<Router[]>, setRedux: (data: Router[]) => void) => {
	const AysncComponentPromise = (): Promise<{ default: ComponentType }> =>
		new Promise(async (resolve, reject) => {
			try {
				const data = await api();
				setRedux(data);

				resolve({
					default: Component
				});
			} catch (error) {
				resolve({
					default: () => <div>路由没啦....</div>
				});
			}
		});

	return lazy(AysncComponentPromise);
};

const useAysncComponent = (LayoutComponent: React.FC) => {
	const dispatch = useAppDispatch();

	// 第一次调用接口
	const isApi = useRef(0);

	// 获取路由权限
	const router = () => {
		isApi.current = isApi.current + 1;

		// 模拟接口
		return new Promise<Router[]>((resolve, reject) => {
			setTimeout(() => {
				// console.log(1);

				resolve(menuList);
			}, 2000);
		});
	};

	// 把路由存入redux
	const setRedux = (data: Router[]) => {
		dispatch(SET_ROUTER(data));
	};

	const LazyComponent = AysncComponentHoc(LayoutComponent, router, setRedux);

	// 只做一次权限判断
	if (isApi.current === 0) {
		return (
			<Suspense
				fallback={
					<>
						<Iloading></Iloading>
					</>
				}>
				<LazyComponent></LazyComponent>
			</Suspense>
		);
	} else {
		return <LayoutComponent></LayoutComponent>;
	}
};

export default useAysncComponent;
