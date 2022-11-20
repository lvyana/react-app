/**
 *	@name 实现loading
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { ReactNode, Suspense } from 'react';
import Loading from '@/antdComponents/iLoading';
// import Nprogress from './Nprogress';
// 两种均可

const SuspenseLoad = (element: ReactNode) => {
	return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

export default SuspenseLoad;
