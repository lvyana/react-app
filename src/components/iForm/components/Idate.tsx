import React, { FC } from 'react';
import { DatePicker, TimePicker } from 'antd';
import type { FormItemCom } from '../type';
import type { Dayjs } from 'dayjs';
import { FormItemMap } from '../type';

const { RangePicker } = DatePicker;
// 日期
export const formDatePicker: FormItemMap['datePicker'] = (item) => {
	return <DatePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} disabled={item.disabled} />;
};

type EventValue<DateType> = DateType | null;
export type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;

// 区间日期
export const formRangePicker: FormItemMap['rangePicker'] = (item) => {
	return <RangePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} disabled={item.disabled} />;
};

// 时间
export const formTimePicker = <T, E extends ((value: Dayjs | null, dateString: string) => void) | undefined>(item: FormItemCom<T, E>) => {
	const format = 'HH:mm';
	return (
		<TimePicker
			minuteStep={15}
			onChange={item.onChange}
			format={format}
			disabledDate={item.disabledDate}
			style={{ width: '100%', ...item.style }}
			disabled={item.disabled}
		/>
	);
};

// 时间区间
export const formTimeRangePicker: FormItemMap['timeRangePicker'] = (item) => {
	const format = 'HH:mm';
	return (
		<TimePicker.RangePicker
			onChange={item.onChange}
			minuteStep={15}
			format={format}
			disabledDate={item.disabledDate}
			style={{ ...item.style }}
			disabled={item.disabled}
		/>
	);
};
