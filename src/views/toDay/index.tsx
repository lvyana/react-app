/**
 * @name 今日事今日毕
 * @use ly
 * @date 2022年11月1日
 */
import React, { FC, lazy, Suspense } from 'react';
import DateAndPersonnel from './components/dateAndPersonnel';
import TaskList from './components/taskList';
import ToDayReducer from './context';

const index = () => {
	return (
		<ToDayReducer>
			<div className="flex justify-between gap-x-8">
				<div className="w-2/5  h-full">
					<DateAndPersonnel></DateAndPersonnel>
				</div>
				<div className="w-3/5">
					<TaskList></TaskList>
				</div>
			</div>
		</ToDayReducer>
	);
};

export default index;
