import React, { FC } from 'react';
import type { FormItemCom } from '../type';

// 自定义组件
export const formUserDefined = (item: FormItemCom) => {
	return item.children;
};
