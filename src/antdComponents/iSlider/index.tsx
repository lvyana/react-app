/**
 * @file 滑动输入条
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import { Slider } from 'antd';

/**
 * 滑动输入条props
 * @param disabled 值为 true 时，滑块为禁用状态
 * @method onChange 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入
 * @param range 双滑块模式
 * @param max 最大值
 * @param min 最小值
 * @param style 样式
 */
export type SliderType = {
	disabled?: boolean;
	onChange?: ((value: number) => void) | undefined;
	range?: false;
	max?: number;
	min?: number;
	style?: React.CSSProperties;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const getSlider = (item: SliderType) => {
	return <Slider range={item.range} onChange={item.onChange} disabled={item.disabled} max={item.max} min={item.min} />;
};

export default getSlider;
