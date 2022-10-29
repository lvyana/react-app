import React, { FC } from 'react';
import { FormItemMap } from '../type';

// 自定义组件
export const formUserDefined: FormItemMap['userDefined'] = (item) => {
	return item.children;
};
