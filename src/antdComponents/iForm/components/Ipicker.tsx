/**
 * @file 日期
 * @author ly
 * @createDate 2023年1月3日
 */
import React from 'react';
import { DatePicker, TimePicker } from 'antd';
import type { FormItemMap } from '../type';

const { RangePicker } = DatePicker;
/**
 * @method 日期
 * @param item 组件参数
 *
 */
export const formDatePicker: FormItemMap['datePicker'] = (item) => {
	return <DatePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} disabled={item.disabled} />;
};

type EventValue<DateType> = DateType | null;
export type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;

/**
 * @method 区间日期
 * @param item 组件参数
 * @returns 表单内嵌组件
 */
export const formRangePicker: FormItemMap['rangePicker'] = (item) => {
	return <RangePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} disabled={item.disabled} />;
};

/**
 * @method 时间
 * @param item 组件参数
 * @returns 表单内嵌组件
 */
export const formTimePicker: FormItemMap['timePicker'] = (item) => {
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

/**
 * @method 时间区间
 * @param item 组件参数
 * @returns 表单内嵌组件
 */
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
