import React, { FC } from 'react';
import { FormItemParam } from '../type';

// 自定义组件
export const formUserDefined = (item: FormItemParam) => {
	return item.children;
};
