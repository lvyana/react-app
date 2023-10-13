/**
 * @file 滑动输入条
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import { Slider } from 'antd';

export type SliderType = {
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: number) => void) | undefined;
	range?: false;
	style?: React.CSSProperties;
	max?: number;
	min?: number;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const getSlider = (item: SliderType) => {
	return <Slider range={item.range} onChange={item.onChange} disabled={item.disabled} max={item.max} min={item.min} />;
};

export default getSlider;
