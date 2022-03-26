import React, { ReactNode, Suspense } from 'react';
import Loading from '@/components/loading';
// import Nprogress from './Nprogress';
// 两种均可

const SuspenseLoad = (element: ReactNode) => {
	return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

export default SuspenseLoad;
