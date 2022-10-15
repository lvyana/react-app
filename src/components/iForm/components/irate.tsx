import React, { FC } from 'react';
import { Rate } from 'antd';
import { FormItemParam } from '../type';

// 评分
export const formRate = (item: FormItemParam) => {
	return <Rate tooltips={item.option} onChange={item.onChange} />;
};
