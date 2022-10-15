import React, { FC } from 'react';
import { Checkbox } from 'antd';
import { FormItemParam } from '../type';

// 多选
export const formCheckbox = (item: FormItemParam) => {
	return <Checkbox.Group options={item.option} onChange={item.onChange} />;
};
