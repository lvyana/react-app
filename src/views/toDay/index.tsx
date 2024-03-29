/**
 * @file 今日事今日毕
 * @author ly
 * @createDate 2022年11月1日
 */
import React from 'react';
import DateAndPersonnel from './components/dateAndPersonnel';
import TaskList from './components/taskList';
import ToDayContext from './context';
import AddTask from './components/taskList/AddTask';

const ToDay = () => {
	return (
		<ToDayContext>
			<div className="flex justify-between min-w-xxl">
				<div className="w-2/5 relative">
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
		</ToDayContext>
	);
};

export default ToDay;
