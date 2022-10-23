import React, { FC } from 'react';
import { Rate } from 'antd';
import type { FormItemCom } from '../type';

// 评分
export const formRate = (item: FormItemCom) => {
	return <Rate tooltips={item.option} onChange={item.onChange} disabled={item.disabled} style={{ width: '100%', ...item.style }} />;
};
