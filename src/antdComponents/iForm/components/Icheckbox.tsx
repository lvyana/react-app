/**
 * @file 多选
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import { Checkbox } from 'antd';
import type { FormItemMap } from '../type';

export const formCheckbox: FormItemMap['checkbox'] = (item) => {
	return <Checkbox.Group options={item.option} onChange={item.onChange} disabled={item.disabled} style={{ ...item.style }} />;
};
