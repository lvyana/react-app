import React, { FC } from 'react';
import { Radio } from 'antd';
import IconFont from '@/utils/iconfont';
import { FormItemMap } from '../type';

export interface formRadioOptionsParams {
	key: string | number;
	value: string | number;
	icon?: string;
	name?: string;
}
// 单选
export const formRadio: FormItemMap['radio'] = (item) => {
	return (
		<Radio.Group onChange={item.onChange}>
			{item.option &&
				item.option.map((value) => {
					return (
						<Radio key={value.key} value={value.value} disabled={item.disabled} style={{ width: '100%', ...item.style }}>
							{value.icon && <IconFont type={value.icon} />} {value.name}
						</Radio>
					);
				})}
		</Radio.Group>
	);
};
