import React, { useEffect } from 'react';
// 引入相关的hooks
import { useAppDispatch, useAppSelector } from '@/store';
// 引入对应的方法
import { GET_LIST, getMovieData } from '@/store/reducers/log';

/**
 *
 * @returns RTK数据管理
 */
const Rtk = () => {
	// 通过useDispatch 派发事件
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getMovieData());
	}, []);

	const list = useAppSelector(GET_LIST);

	return (
		<div>
			{list.map((item) => {
				return <div key={item.name}>{item.name}</div>;
			})}
		</div>
	);
};

export default Rtk;
