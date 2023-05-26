/**
 * @file 自定义组件
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import type { FormItemMap } from '../type';

export const formUserDefined: FormItemMap['userDefined'] = (item) => {
	return <div>{item.children}</div>;
};
