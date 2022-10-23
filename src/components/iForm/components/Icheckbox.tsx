import React, { FC } from 'react';
import { Checkbox } from 'antd';
import type { FormItemCom } from '../type';

// 多选
export const formCheckbox = (item: FormItemCom) => {
	return <Checkbox.Group options={item.option} onChange={item.onChange} disabled={item.disabled} style={{ ...item.style }} />;
};
