/**
 * @file 评分
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import { Rate } from 'antd';
import type { FormItemMap } from '../type';

export const formRate: FormItemMap['rate'] = (item) => {
	return <Rate tooltips={item.option} onChange={item.onChange} disabled={item.disabled} style={{ width: '100%', ...item.style }} />;
};
