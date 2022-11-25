import React from 'react';
import { Badge, BadgeProps, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';

const Date = () => {
	const dateCellRender = (value: Dayjs) => {
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

	const getMonthData = (value: Dayjs) => {
		if (value.month() === 8) {
			return 1394;
		}
	};

	const monthCellRender = (value: Dayjs) => {
		const num = getMonthData(value);
		return num ? (
			<div className="notes-month">
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	};

	return (
		<>
			<Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
		</>
	);
};

const getListData = (value: Dayjs) => {
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

export default Date;
