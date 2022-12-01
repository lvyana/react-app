/**
 * @name 团队和日期缓存
 * @user ly
 * @date 2022年12月1日
 */
import React, { FC, lazy, Suspense } from 'react';
import { DateAndPersonnelProps } from './index';
import Loading from '@/antdComponents/iLoading';

const AsyncDateAndPersonnel = (Component: FC<DateAndPersonnelProps>, api: () => Promise<DateAndPersonnelProps>) => {
	const PromiseComponent = (): Promise<{ default: FC }> => {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await api();
				const { oldUserId, oldDate } = res;
				resolve({
					default: () => <Component oldUserId={oldUserId} oldDate={oldDate}></Component>
				});
			} catch (error) {
				reject({
					default: () => <Component oldUserId={undefined} oldDate={undefined}></Component>
				});
			}
		});
	};
	return lazy(PromiseComponent);
};

const DateAndPersonnelHoc = (Component: FC<DateAndPersonnelProps>) => {
	const api = () => {
		return new Promise<DateAndPersonnelProps>((resolve, reject) => {
			setTimeout(() => {
				// console.log(1);

				resolve({ oldUserId: undefined, oldDate: '2022-11-30' });
			}, 1000);
		});
	};
	const LazyComponent = AsyncDateAndPersonnel(Component, api);
	return (
		<Suspense fallback={<Loading></Loading>}>
			<LazyComponent></LazyComponent>
		</Suspense>
	);
};

export default DateAndPersonnelHoc;
