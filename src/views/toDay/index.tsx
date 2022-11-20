/**
 * @name 今日事今日毕
 * @use ly
 * @date 2022年11月1日
 */
import React from 'react';
import LeftCalendar from './components/dateOfPersonnel';
import RightContent from './components/taskList';
import ToDayReducer from './context';

const index = () => {
	return (
		<ToDayReducer>
			<div className="flex justify-between gap-x-8">
				<div className="w-2/5  h-full">
					<LeftCalendar></LeftCalendar>
				</div>
				<div className="w-3/5">
					<RightContent></RightContent>
				</div>
			</div>
		</ToDayReducer>
	);
};

export default index;
