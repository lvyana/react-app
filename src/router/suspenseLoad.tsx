/**
 * @file Suspense
 * @author ly
 * @createDate 日期：2020年4月27日
 */
import React, { ReactNode, Suspense } from 'react';
// import Loading from '@/antdComponents/iLoading';
import Iloading from '@/pluginComponents/iLoading';
// import Nprogress from './Nprogress';
// 两种均可

const SuspenseLoad = (element: ReactNode) => {
	return <Suspense fallback={<Iloading />}>{element}</Suspense>;
};

export default SuspenseLoad;
