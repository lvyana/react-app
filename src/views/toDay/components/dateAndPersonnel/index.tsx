import React, { useState, useContext, useEffect, useMemo, FC } from 'react';
import TeamMembers from './TeamMembers';
import Date from './Date';
import dayjs, { Dayjs } from 'dayjs';
import { useRequest } from 'ahooks';
import { taskList } from '../../service';
import { toDayContext } from '../../context';
import DateAndPersonnelHoc from './AsyncDateAndPersonnel';
export interface DateAndPersonnelProps {
	oldUserId?: string;
	oldDate?: string;
}

const DateAndPersonnel: FC<DateAndPersonnelProps> = ({ oldUserId, oldDate }) => {
	console.log(oldUserId, oldDate);

	const toDay = useContext(toDayContext);

	useEffect(() => {
		run();
	}, []);

	// 用户列表
	const [userId, setUserId] = useState<string>();

	const onAvatar = (key: string) => {
		setUserId(key);
		run();
	};

	// 日期
	const [dateValue, setDateValue] = useState<Dayjs>(() => {
		return dayjs();
	});

	const onchangeDate = (value: Dayjs) => {
		setDateValue(value);
		run();
	};

	// 获取任务列表数据
	const { loading, run, runAsync } = useRequest(taskList, {
		manual: true,
		onSuccess: (res) => {
			const { data } = res;
			toDay?.dispatch({ type: 'taskListData', value: data });
		}
	});

	useEffect(() => {
		toDay?.dispatch({ type: 'taskListLoading', value: loading });
	}, [loading]);

	return (
		<div className="fixed w-2/5  p-2">
			<TeamMembers userId={userId} onAvatar={onAvatar}></TeamMembers>
			<Date dateValue={dateValue} userId={userId} onchangeDate={onchangeDate}></Date>
		</div>
	);
};

export default () => DateAndPersonnelHoc(DateAndPersonnel);
