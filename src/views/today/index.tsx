/**
 * @name 今日事今日毕
 * @use ly
 * @date 2022年11月1日
 */
import React from 'react';
import LeftCalendar from './components/LeftCalendar';
import Content from './components/Content';

const index = () => {
	return (
		<div className="flex justify-between">
			<div className="w-2/5  h-full">
				<LeftCalendar></LeftCalendar>
			</div>
			<div className="w-3/5">
				<Content></Content>
			</div>
		</div>
	);
};

export default index;
