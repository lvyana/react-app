/**
 * @name 自定义组件
 * @user ly
 * @date 2023年1月3日
 */
import React, { FC } from 'react';
import type { FormItemMap } from '../type';

export const formUserDefined: FormItemMap['userDefined'] = (item) => {
	return item.children;
};
