import React, { FC } from 'react';
import { Rate } from 'antd';
import type { FormItemMap } from '../type';

// 评分
export const formRate: FormItemMap['rate'] = (item) => {
	return <Rate tooltips={item.option} onChange={item.onChange} disabled={item.disabled} style={{ width: '100%', ...item.style }} />;
};
