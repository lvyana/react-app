import React from 'react';
import { Slider } from 'antd';
import type { FormItemMap } from '../type';

export const formslider: FormItemMap['slider'] = (item) => {
	return <Slider disabled={item.disabled} max={item.max} min={item.min} />;
};
