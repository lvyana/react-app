/**
 * @name 滑动输入条
 * @user ly
 * @date 2023年1月3日
 */
import React from 'react';
import { Slider } from 'antd';
import type { FormItemMap } from '../type';

export const formslider: FormItemMap['slider'] = (item) => {
	return <Slider range={item.range} onChange={item.onChange} disabled={item.disabled} max={item.max} min={item.min} />;
};
