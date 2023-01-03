/**
 * @name 开关
 * @user ly
 * @date 2023年1月3日
 */
import React, { FC } from 'react';
import { Switch } from 'antd';
import type { FormItemMap } from '../type';

export const formSwitch: FormItemMap['switch'] = (item) => {
	return <Switch onChange={item.onChange} disabled={item.disabled} style={{ ...item.style }} />;
};
