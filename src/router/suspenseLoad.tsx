/**
 * @file Suspense
 * @author ly
 * @createDate 日期：2020年4月27日
 */
import React, { ComponentType, lazy, ReactNode, Suspense } from 'react';
// import Loading from '@/antdComponents/iLoading';
import Iloading from '@/pluginComponents/iLoading';
// import Nprogress from './Nprogress';
// 两种均可

const suspenseLoad = (element: () => Promise<{ default: ComponentType }>) => {
	const LazyComponent = lazy(element);
	return (
		<Suspense fallback={<Iloading />}>
			<LazyComponent />
		</Suspense>
	);
};

export default suspenseLoad;
