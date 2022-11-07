import React from 'react';
import { Badge, BadgeProps, Calendar } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import TeamMembers from './TeamMembers';
import type { Moment } from 'moment';

const LeftCalendar = () => {
	const monthCellRender = (value: Moment) => {
		const num = getMonthData(value);
		return num ? (
			<div className="notes-month">
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	};

	const dateCellRender = (value: Moment) => {
		const listData = getListData(value);
		return (
			<div className="events">
				{listData.map((item) => (
					<div key={item.content}>
						<Badge status={item.type as BadgeProps['status']} text={<span className="text-xs">{item.content}</span>} />
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="fixed w-2/5  p-2">
			<TeamMembers></TeamMembers>
			<Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
		</div>
	);
};

const getListData = (value: Moment) => {
	let listData;
	switch (value.date()) {
		case 8:
			listData = [
				{ type: 'processing', content: '进行中 2' },
				{ type: 'error', content: '超时 5' },
				{ type: 'success', content: '已完成 5' }
			];
			break;
		case 10:
			listData = [
				{ type: 'processing', content: '进行中 2' },
				{ type: 'error', content: '超时 5' },
				{ type: 'success', content: '已完成 5' }
			];
			break;
		case 15:
			listData = [
				{ type: 'processing', content: '进行中 2' },
				{ type: 'error', content: '超时 5' },
				{ type: 'success', content: '已完成 5' }
			];
			break;
		case 13:
			listData = [{ type: 'success', content: '本周冲刺上线' }];
			break;
		default:
	}
	return listData || [];
};

const getMonthData = (value: Moment) => {
	if (value.month() === 8) {
		return 1394;
	}
};

export default LeftCalendar;
