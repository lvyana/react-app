import React, { FC } from 'react';
import { Switch } from 'antd';
import type { FormItemMap } from '../type';

// 是否
export const formSwitch: FormItemMap['switch'] = (item) => {
	return <Switch onChange={item.onChange} disabled={item.disabled} style={{ ...item.style }} />;
};
