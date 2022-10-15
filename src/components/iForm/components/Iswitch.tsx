import React, { FC } from 'react';
import { Switch } from 'antd';
import { FormItemParam } from '../type';

// 是否
export const formSwitch = (item: FormItemParam) => {
	return <Switch onChange={item.onChange} />;
};
