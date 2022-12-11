/**
 * @name 日期列表
 * @user ly
 * @date 2022年11月30日
 */
import React, { useState, useContext, useEffect, FC } from 'react';
import { Badge, BadgeProps, Calendar } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useRequest } from 'ahooks';
import { dateList } from '../../service';

export interface DateListParams {
	underway: number;
	overtime: number;
	accomplish: number;
	date: string;
}

interface DateProps {
	userId?: string;
	dateValue: Dayjs;
	onchangeDate: (value: Dayjs) => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Date: FC<DateProps> = ({ userId, dateValue, onchangeDate }) => {
	const [dateData, setDateData] = useState<DateListParams[]>([]);

	const { run } = useRequest(dateList, {
		manual: true,
		onSuccess: (res) => {
			const { data } = res;
			setDateData(data);
		}
	});
	useEffect(() => {
		run(userId);
	}, [userId]);

	const dateCellRender = (value: Dayjs) => {
		const listData = getListData(value, dateData);
		return (
			<>
				{listData.map((item) => (
					<div key={item.content}>
						<Badge status={item.type as BadgeProps['status']} text={<span className="text-xs">{item.content}</span>} />
					</div>
				))}
			</>
		);
	};

	return (
		<>
			<Calendar dateCellRender={dateCellRender} value={dateValue} onChange={onchangeDate} />
		</>
	);
};

const getListData = (value: Dayjs, dateData: DateListParams[]) => {
	const dateDataItem = dateData.find((item) => {
		return item.date === dayjs(value).format('YYYY-MM-DD');
	});

	if (dateDataItem) {
		return [
			{ type: 'processing', content: `进行中 ${dateDataItem?.underway}` },
			{ type: 'error', content: `超时 ${dateDataItem?.overtime}` },
			{ type: 'success', content: `已完成 ${dateDataItem?.accomplish}` }
		];
	}
	return [];
};

export default Date;
