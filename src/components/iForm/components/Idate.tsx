import React, { FC } from 'react';
import { DatePicker, TimePicker } from 'antd';
import type { FormItemCom } from '../type';

const { RangePicker } = DatePicker;
// 日期
export const formDatePicker = (item: FormItemCom) => {
	return <DatePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} disabled={item.disabled} />;
};

// 区间日期
export const formRangePicker = (item: FormItemCom) => {
	return <RangePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} disabled={item.disabled} />;
};

// 时间
export const formTimePicker = (item: FormItemCom) => {
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
export const formTimeRangePicker = (item: FormItemCom) => {
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
