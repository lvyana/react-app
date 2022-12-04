/**
 * @name 今日事今日毕
 * @use ly
 * @date 2022年11月1日
 */
import React, { FC, lazy, Suspense } from 'react';

import DateAndPersonnel from './components/dateAndPersonnel';
import TaskList from './components/taskList';
import ToDayReducer from './context';
import AddTask from './components/taskList/AddTask';

const index = () => {
	return (
		<ToDayReducer>
			<div className="flex justify-between min-w-xxl">
				<div className="w-2/5  h-full relative">
					{/* 左侧团队和日期 */}
					<DateAndPersonnel></DateAndPersonnel>
				</div>
				<div className="w-3/5  overflow-y-auto" style={{ height: 'calc(100vh - 10px)' }}>
					{/* 右侧任务列表 */}
					<TaskList></TaskList>
				</div>
				{/* 新增任务 */}
				<AddTask></AddTask>
			</div>
		</ToDayReducer>
	);
};

export default index;
