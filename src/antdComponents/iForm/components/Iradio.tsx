/**
 * @name 单选
 * @user ly
 * @date 2023年1月3日
 */
import React, { FC } from 'react';
import { Radio } from 'antd';
import IconFont from '@/utils/iconfont';
import type { FormItemMap } from '../type';

export interface formRadioOptionsParams {
	key: string | number;
	value: string | number;
	icon?: string;
	name?: string;
}

// 单选
export const formRadio: FormItemMap['radio'] = (item) => {
	return (
		<Radio.Group onChange={item.onChange} optionType={item.optionType}>
			{item.option &&
				item.option.map((value) => {
					return (
						<Radio key={value.key} value={value.value} disabled={item.disabled} style={{ ...item.style }}>
							{value.icon && <IconFont type={value.icon} />} {value.name}
						</Radio>
					);
				})}
		</Radio.Group>
	);
};
