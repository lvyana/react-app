import React from 'react';
import { Slider } from 'antd';
import { FormItemMap } from '../type';

export const formslider: FormItemMap['slider'] = (item) => {
	return <Slider disabled={item.disabled} />;
};
