import React, { FC } from 'react';
import { Radio } from 'antd';
import { FormItemParam } from '../type';
import IconFont from '@/utils/iconfont';

// 单选
export const formRadio = (item: FormItemParam) => {
	return (
		<Radio.Group onChange={item.onChange}>
			{item.option &&
				item.option.map((value) => {
					return (
						<Radio key={value.key} value={value.value}>
							{value.icon && <IconFont type={value.icon} />} {value.name}
						</Radio>
					);
				})}
		</Radio.Group>
	);
};
