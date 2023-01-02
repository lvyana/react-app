import React, { FC } from 'react';
import type { FormItemMap } from '../type';

// 自定义组件
export const formUserDefined: FormItemMap['userDefined'] = (item) => {
	return item.children;
};
