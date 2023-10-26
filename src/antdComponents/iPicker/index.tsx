/**
 * @file 日期
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC, ReactNode } from 'react';
import { DatePicker, TimePicker } from 'antd';
import { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

/**
 * 日期、时间
 * @param disabled 禁用
 * @param allowClear 自定义清除按钮
 * @method onChange 时间发生变化的回调
 * @param placeholder 输入框提示文字
 * @param style 样式
 * @param disabledDate 不可选择的日期
 */
export type AlonePicker = {
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: Dayjs | null, dateString: string) => void) | undefined;
	placeholder?: string;
	style?: React.CSSProperties;
	disabledDate?: (currentDate: Dayjs) => boolean;
};

type EventValue<DateType> = DateType | null;
export type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;

// bothPicker 双个
/**
 * 日期、时间区间
 * @param disabled 禁用
 * @param allowClear 自定义清除按钮
 * @method onChange 时间发生变化的回调
 * @param placeholder 输入框提示文字
 * @param style 样式
 * @param disabledDate 不可选择的日期
 */
export type BothPicker = {
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: (dates: RangeValue<Dayjs>, dateStrings: [string, string]) => void | undefined;
	placeholder?: string;
	style?: React.CSSProperties;
	disabledDate?: (currentDate: Dayjs) => boolean;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

/**
 * @method 日期
 * @param item 组件参数
 */
export const getDatePicker = (item: AlonePicker) => {
	return <DatePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} disabled={item.disabled} />;
};

/**
 * @method 区间日期
 * @param item 组件参数
 */
export const getRangePicker = (item: BothPicker) => {
	return <RangePicker onChange={item.onChange} disabledDate={item.disabledDate} style={{ width: '100%' }} disabled={item.disabled} />;
};

/**
 * @method 时间
 * @param item 组件参数
 */
export const getTimePicker = (item: AlonePicker) => {
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
 */
export const getTimeRangePicker = (item: BothPicker) => {
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
