import React, { FC } from 'react';
import { Switch } from 'antd';
import type { FormItemCom } from '../type';

// 是否
export const formSwitch = (item: FormItemCom) => {
	return <Switch onChange={item.onChange} disabled={item.disabled} style={{ width: '100%', ...item.style }} />;
};
