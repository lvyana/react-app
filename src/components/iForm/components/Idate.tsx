import React, { FC } from 'react';
import { DatePicker, TimePicker } from 'antd';
import { FormItemParam } from '../type';

const { RangePicker } = DatePicker;
// 日期
export const formDatePicker = (item: FormItemParam) => {
	return <DatePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} />;
};

// 区间日期
export const formRangePicker = (item: FormItemParam) => {
	return <RangePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} />;
};

// 时间
export const formTimePicker = (item: FormItemParam) => {
	const format = 'HH:mm';
	return <TimePicker minuteStep={15} onChange={item.onChange} format={format} disabledDate={item.disabledDate} style={{ width: '100%' }} />;
};

// 时间区间
export const formTimeRangePicker = (item: FormItemParam) => {
	const format = 'HH:mm';
	return (
		<TimePicker.RangePicker
			onChange={item.onChange}
			minuteStep={15}
			format={format}
			disabledDate={item.disabledDate}
			style={{ width: '100%' }}
		/>
	);
};
