import React, { FC } from 'react';
import { Checkbox } from 'antd';
import { FormItemMap } from '../type';

// 多选
export const formCheckbox: FormItemMap['checkbox'] = (item) => {
	return <Checkbox.Group options={item.option} onChange={item.onChange} disabled={item.disabled} style={{ ...item.style }} />;
};
